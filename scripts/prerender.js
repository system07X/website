import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App.jsx'

export async function prerender({ url }) {
  const lang = url.startsWith('/en') ? 'en' : 'no'
  const content = lang === 'en'
    ? await import('../src/data-en.js')
    : await import('../src/data-no.js')
  const isEnglish = lang === 'en'

  return {
    html: renderToString(React.createElement(App, { content, lang })),
    head: {
      lang,
      title: isEnglish ? 'Private Chef in Oslo | Mathis Cousyn' : 'Privatkokk i Oslo | Mathis Cousyn',
      elements: new Set([
        {
          type: 'meta',
          props: {
            name: 'description',
            content: isEnglish
              ? 'Private chef in Oslo and the surrounding area. Seasonal menus and a restaurant experience in your own home.'
              : 'Privatkokk i Oslo og omegn. Sesongbaserte menyer og restaurantopplevelsen hjemme hos deg.',
          },
        },
        { type: 'link', props: { rel: 'alternate', hreflang: 'no', href: '/' } },
        { type: 'link', props: { rel: 'alternate', hreflang: 'en', href: '/en/' } },
        { type: 'link', props: { rel: 'alternate', hreflang: 'x-default', href: '/' } },
      ]),
    },
  }
}
