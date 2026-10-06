import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

async function start() {
  // Le chemin fait foi : en dev, /en/ est servi avec le index.html norvégien (lang="no")
  const lang = /^\/en(\/|$)/.test(window.location.pathname) ? 'en' : 'no'
  document.documentElement.lang = lang
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
