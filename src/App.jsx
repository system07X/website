import { useState } from 'react'
import Backdrop from './Backdrop.jsx'
import BookingForm from './BookingForm.jsx'
import { BRAND, CONTACT_EMAIL, DISHES, EXTRAS, MENUS, UI } from './data.js'

// Photos des plats (src/assets/creations/) : la 1re photo va avec le 1er plat, etc.
const dishFiles = import.meta.glob('./assets/creations/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true, query: '?url', import: 'default',
})
const DISH_IMAGES = Object.keys(dishFiles).sort().map((k) => dishFiles[k])

export default function App() {
  const [lang, setLang] = useState(0) // 0 = norvégien, 1 = anglais
  const [mode, setMode] = useState('menu')
  const [menuId, setMenuId] = useState(MENUS[0].id)
  const L = (pair) => pair[lang]

  function choose(id) {
    setMenuId(id)
    setMode('menu')
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Backdrop />
      <nav>
        <span className="logo">{BRAND}</span>
        <span>
          <a href="#menus">{L(UI.navMenus)}</a>
          <a href="#creations">{L(UI.navCreations)}</a>
          <a href="#how">{L(UI.navHow)}</a>
          <a href="#booking">{L(UI.navBook)}</a>
          <button onClick={() => { setLang(1 - lang); document.documentElement.lang = lang ? 'no' : 'en' }}>{lang ? 'NO' : 'EN'}</button>
        </span>
      </nav>

      <header>
        <h1>{L(UI.heroTitle)}</h1>
        <p>{L(UI.heroText)}</p>
        <a className="btn" href="#booking">{L(UI.heroCta)}</a>
      </header>

      <section id="menus">
        <h2>{L(UI.menusTitle)}</h2>
        <p className="sub">{L(UI.menusSub)}</p>
        <div className="menus">
          {MENUS.map((m) => (
            <article className="mc" key={m.id}>
              <h3>{L(m.name)}</h3>
              <div className="pr">{m.price} {L(UI.perPerson)}</div>
              <ul>
                <li>{L(m.starter)}</li>
                <li>{L(m.main)}</li>
                <li>{L(m.dessert)}</li>
              </ul>
              <button className="btn small" onClick={() => choose(m.id)}>{L(UI.choose)}</button>
            </article>
          ))}
        </div>
        <div className="extras">
          {EXTRAS.map((e) => (
            <div className="ex" key={e.id}><b>{L([e.no, e.en])}</b> + {e.price} {L(UI.perPerson)}</div>
          ))}
        </div>
      </section>

      <section id="creations">
        <h2>{L(UI.creationsTitle)}</h2>
        <p className="sub">{L(UI.creationsSub)}</p>
        <div className="grid">
          {DISHES.map((d, i) => (
            <figure className="tile" key={i}>
              {DISH_IMAGES[i]
                ? <img className="ph" src={DISH_IMAGES[i]} alt={L(d.name)} loading="lazy" />
                : <div className="ph" style={{ background: d.color }}>{d.emoji}</div>}
              <figcaption><h3>{L(d.name)}</h3><p>{L(d.tag)}</p></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="how">
        <h2>{L(UI.howTitle)}</h2>
        <div className="about">
          {UI.steps.map(([t, p], i) => (
            <div key={i}><h3>{L(t)}</h3><p>{L(p)}</p></div>
          ))}
        </div>
      </section>

      <section id="booking">
        <h2>{L(UI.bookTitle)}</h2>
        <p className="sub">{L(UI.bookSub)}</p>
        <BookingForm L={L} mode={mode} setMode={setMode} menuId={menuId} setMenuId={setMenuId} />
      </section>

      <footer>© {BRAND} · Oslo · {CONTACT_EMAIL}</footer>
    </>
  )
}
