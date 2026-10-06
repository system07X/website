import { useState } from 'react'
import Backdrop from './Backdrop.jsx'
import BookingForm from './BookingForm.jsx'
import { BRAND, CONTACT_EMAIL } from './data.js'

// Photos des plats (src/assets/creations/) : la 1re photo va avec le 1er plat, etc.
const dishFiles = import.meta.glob('./assets/creations/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true, query: '?url', import: 'default',
})
const DISH_IMAGES = Object.keys(dishFiles).sort().map((k) => dishFiles[k])

export default function App({ content, lang }) {
  const [mode, setMode] = useState('menu')
  const { DISHES, EXTRAS, MENUS, UI } = content
  const [menuId, setMenuId] = useState(MENUS[0].id)
  const [aboutOpen, setAboutOpen] = useState(false)

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
          <a href="#aboutme" onClick={() => setAboutOpen(true)}>{UI.navAbout}</a>
          <a href="#menus">{UI.navMenus}</a>
          <a href="#creations">{UI.navCreations}</a>
          <a href="#how">{UI.navHow}</a>
          <a href="#booking">{UI.navBook}</a>
          <a className="lang-switch" href={lang === 'en' ? '/' : '/en/'} lang={lang === 'en' ? 'no' : 'en'}>{lang === 'en' ? 'NO' : 'EN'}</a>
        </span>
      </nav>

      <header>
        <h1>{UI.heroTitle}</h1>
        <p>{UI.heroText}</p>
        <a className="btn" href="#booking">{UI.heroCta}</a>
      </header>

      <section id="aboutme">
        <details className="aboutme" open={aboutOpen} onToggle={(e) => setAboutOpen(e.currentTarget.open)}>
          <summary><span>{UI.aboutTitle}</span>{UI.aboutTeaser && <em>{UI.aboutTeaser}</em>}</summary>
          <div className="aboutme-body">
            {UI.aboutText.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </details>
      </section>

      <section id="menus">
        <h2>{UI.menusTitle}</h2>
        <p className="sub">{UI.menusSub}</p>
        <div className="menus">
          {MENUS.map((m) => (
            <article className="mc" key={m.id}>
              <h3>{m.name}</h3>
              <div className="pr">{m.price} {UI.perPerson}</div>
              <ul>
                <li>{m.starter}</li>
                <li>{m.main}</li>
                <li>{m.dessert}</li>
              </ul>
              <button className="btn small" onClick={() => choose(m.id)}>{UI.choose}</button>
            </article>
          ))}
        </div>
        <div className="extras">
          {EXTRAS.map((e) => (
            <div className="ex" key={e.id}><b>{e.label}</b> + {e.price} {UI.perPerson}</div>
          ))}
        </div>
      </section>

      <section id="creations">
        <h2>{UI.creationsTitle}</h2>
        <p className="sub">{UI.creationsSub}</p>
        <div className="grid">
          {DISHES.map((d, i) => (
            <figure className="tile" key={i}>
              {DISH_IMAGES[i]
                ? <img className="ph" src={DISH_IMAGES[i]} alt={d.name} loading="lazy" />
                : <div className="ph" style={{ background: d.color }}>{d.emoji}</div>}
              <figcaption><h3>{d.name}</h3><p>{d.tag}</p></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="how">
        <h2>{UI.howTitle}</h2>
        <p className="sub">{UI.howSub}</p>
        <ol className="steps">
          {UI.steps.map(([title, text], i) => (
            <li key={i}><span className="num">{i + 1}</span><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ol>
        <p className="how-note">{UI.howNote}</p>
      </section>

      <section id="booking">
        <h2>{UI.bookTitle}</h2>
        <p className="sub">{UI.bookSub}</p>
        <BookingForm content={content} mode={mode} setMode={setMode} menuId={menuId} setMenuId={setMenuId} />
      </section>

      <footer>© {BRAND} · Oslo · {CONTACT_EMAIL}</footer>
    </>
  )
}
