import { useEffect, useMemo, useState } from 'react'

// Photos déposées dans src/assets/photos/ (3 ou 4 sont utilisées)
const found = import.meta.glob('./assets/photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true, query: '?url', import: 'default',
})
const PHOTOS = Object.keys(found).sort().map((k) => found[k]).slice(0, 4)
const FALLBACK = ['#8a4b32', '#c98b5e', '#5b3a2a', '#a8643f']
const SEED = 7 // changez ce nombre pour obtenir une autre disposition aléatoire

function rng(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function useDesktop() {
  const [d, setD] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width:800px)')
    const on = () => setD(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return d
}

// Photos droites en quinconce, légèrement décalées au hasard, sur fond sombre
export default function Backdrop() {
  const desktop = useDesktop()
  const n = PHOTOS.length === 3 ? 3 : 4
  const tiles = useMemo(() => {
    const r = rng(SEED)
    const C = desktop ? [[12.5, 25], [62.5, 25], [37.5, 75], [87.5, 75]] : [[25, 12.5], [75, 37.5], [25, 62.5], [75, 87.5]]
    const cw = desktop ? 25 : 50, ch = desktop ? 50 : 25
    const fw = desktop ? 1.7 : 0.9, fh = desktop ? 0.9 : 1.7
    const clamp = (v, max) => Math.min(Math.max(v, 0), max)
    const t = C.slice(0, n).map(([cx, cy], k) => {
      const s = 0.85 + r() * 0.3, w = cw * fw * s, h = ch * fh * s
      // chaque photo reste entière dans le cadre (pas de rognage)
      r() // jitter horizontal abandonné : on garde la même suite aléatoire pour les positions verticales
      // photos de la moitié gauche collées à la marge gauche, celles de droite à la marge droite
      return { k, w, h, left: cx < 50 ? 0 : 100 - w, top: clamp(cy + (r() - 0.5) * 8 - h / 2, 100 - h) }
    })
    return t.map(({ k, w, h, left, top }) => ({ k, left: left + '%', top: top + '%', width: w + '%', height: h + '%' }))
  }, [desktop, n])

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-in">
        {tiles.map(({ k, ...pos }) =>
          PHOTOS.length ? (
            <img key={k} src={PHOTOS[k % PHOTOS.length]} alt="" style={pos} />
          ) : (
            <i key={k} style={{ ...pos, background: FALLBACK[k] }} />
          )
        )}
      </div>
    </div>
  )
}
