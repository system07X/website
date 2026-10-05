import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

async function start() {
  const lang = document.documentElement.lang === 'en' ? 'en' : 'no'
  const content = lang === 'en' ? await import('./data-en.js') : await import('./data-no.js')
  const root = document.getElementById('root')
  const app = <App content={content} lang={lang} />

  if (root.hasChildNodes()) {
    hydrateRoot(root, app)
  } else {
    createRoot(root).render(app)
  }
}

start()
