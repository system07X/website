import { useState } from 'react'
import { UI, MENUS, EXTRAS, CONTACT_EMAIL } from './data.js'

const FORM_ID = import.meta.env.VITE_FORMSPREE_ID

export default function BookingForm({ L, mode, setMode, menuId, setMenuId }) {
  const [extras, setExtras] = useState([])
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const toggle = (id) => setExtras((e) => (e.includes(id) ? e.filter((x) => x !== id) : [...e, id]))

  async function onSubmit(ev) {
    ev.preventDefault()
    const f = new FormData(ev.currentTarget)
    if (f.get('_gotcha')) return // anti-spam : champ caché rempli = robot
    const menu = MENUS.find((m) => m.id === menuId)
    const payload = {
      _subject: `Forespørsel privatkokk – ${f.get('name')} – ${f.get('date')}`,
      name: f.get('name'), email: f.get('email'), phone: f.get('phone'),
      date: f.get('date'), guests: f.get('guests'), event_type: f.get('type'), place: f.get('place'),
      choice: mode === 'menu' ? 'Ferdig meny / Ready-made menu' : "Kokkens meny / Chef's menu",
      ...(mode === 'menu'
        ? {
            menu: `${menu.name[0]} / ${menu.name[1]} (${menu.price} kr/pers)`,
            extras: extras.map((id) => { const e = EXTRAS.find((x) => x.id === id); return `${e.no} / ${e.en} (+${e.price} kr/pers)` }).join(' ; ') || '-',
          }
        : { budget_per_person_NOK: f.get('budget') }),
      message: f.get('msg'),
    }
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(res.status)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent')
    return (
      <div className="form ok" role="status">
        <h3>{L(UI.okTitle)}</h3>
        <p>{L(UI.okText)}</p>
      </div>
    )

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="full modes">
        <label><input type="radio" name="mode" checked={mode === 'menu'} onChange={() => setMode('menu')} /> <span>{L(UI.modeMenu)}</span></label>
        <label><input type="radio" name="mode" checked={mode === 'chef'} onChange={() => setMode('chef')} /> <span>{L(UI.modeChef)}</span></label>
      </div>

      {mode === 'menu' ? (
        <div className="full stack">
          <label><span>{L(UI.fMenu)}</span>
            <select value={menuId} onChange={(e) => setMenuId(e.target.value)}>
              {MENUS.map((m) => <option key={m.id} value={m.id}>{L(m.name)} – {m.price} kr</option>)}
            </select>
          </label>
          {EXTRAS.map((e) => (
            <label key={e.id} className="chk">
              <input type="checkbox" checked={extras.includes(e.id)} onChange={() => toggle(e.id)} />
              <span>{L([e.no, e.en])} (+{e.price} {L(UI.perPerson)})</span>
            </label>
          ))}
        </div>
      ) : (
        <div className="full stack">
          <label><span>{L(UI.fBudget)}</span><input name="budget" type="number" min="300" step="50" placeholder="900" required /></label>
          <p className="note">{L(UI.chefNote)}</p>
        </div>
      )}

      <label><span>{L(UI.fName)}</span><input name="name" required autoComplete="name" /></label>
      <label><span>{L(UI.fEmail)}</span><input name="email" type="email" required autoComplete="email" /></label>
      <label><span>{L(UI.fPhone)}</span><input name="phone" type="tel" autoComplete="tel" /></label>
      <label><span>{L(UI.fDate)}</span><input name="date" type="date" required /></label>
      <label><span>{L(UI.fGuests)}</span><input name="guests" type="number" min="1" max="40" defaultValue="4" required /></label>
      <label><span>{L(UI.fType)}</span>
        <select name="type">{UI.types.map((t) => <option key={t[0]} value={`${t[0]} / ${t[1]}`}>{L(t)}</option>)}</select>
      </label>
      <label className="full"><span>{L(UI.fPlace)}</span><input name="place" /></label>
      <label className="full"><span>{L(UI.fMsg)}</span><textarea name="msg" /></label>
      <input name="_gotcha" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />

      <div className="full">
        <button className="btn" type="submit" disabled={status === 'sending'}>{L(status === 'sending' ? UI.sending : UI.send)}</button>
        {status === 'error' && <p className="note err" role="alert">{L(UI.err)} {CONTACT_EMAIL}</p>}
      </div>
    </form>
  )
}
