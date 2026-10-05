import { BRAND, CONTACT_EMAIL } from './data.js'

export { BRAND, CONTACT_EMAIL }

export const EXTRAS = [
  { id: 'oysters', price: 190, label: 'Østers som forrett (3 per person)' },
  { id: 'cheese', price: 120, label: 'Ostetallerken (4 oster)' },
]

export const MENUS = [
  { id: 'sp', price: 750, name: 'Spansk inspirasjon', starter: 'Pan con tomate', main: 'Kyllingsupreme med potetmos, hvitløk, chorizo & paprika', dessert: 'Appelsin med kanel' },
  { id: 'vege', price: 750, name: 'Vegetarianer', starter: 'Tomatcarpaccio', main: 'aubergine og sopp curry', dessert: 'Armriddere & kandisert pære' },
]

export const DISHES = [
  { name: 'Rødbetgravet laks, agurk, rødbetchips, sitrus og pasjonsfrukt', tag: 'Forrett' },
  { name: 'Andebryst, potetmos og glasert gulrot', tag: 'Hovedrett' },
  { name: 'Sjokoladefondant og Crème Anglaise', tag: 'dessert' },
]

export const UI = {
  navMenus: 'Menyer', navCreations: 'Kreasjoner', navHow: 'Slik fungerer det', navBook: 'Bestill',
  heroTitle: 'Privatkokk i Oslo',
  heroText: 'Restaurantopplevelsen hjemme hos deg. Sesongbaserte råvarer, skreddersydde menyer, middager for 2 til 20 gjester – i Oslo og omegn.',
  heroCta: 'Send en forespørsel',
  menusTitle: 'Ferdige menyer', menusSub: 'Tre retter til fast pris per person. Legg gjerne til ekstra.',
  perPerson: 'kr / pers', choose: 'Velg denne menyen',
  creationsTitle: 'Mine kreasjoner', creationsSub: 'Et utvalg retter fra tidligere middager.',
  howTitle: 'Slik fungerer det',
  steps: [
    ['1. Vi snakker sammen', 'Du forteller om anledning, antall gjester og allergier.'],
    ['2. Jeg lager menyen', 'Et forslag basert på sesongens beste råvarer.'],
    ['3. Jeg kommer til deg', 'Jeg handler, lager mat, serverer og rydder etter meg.'],
  ],
  bookTitle: 'Forespørsel / bestilling', bookSub: 'Fyll ut skjemaet, så svarer jeg innen 24 timer.',
  modeMenu: 'Jeg velger en ferdig meny', modeChef: 'Kokkens meny etter budsjett',
  fMenu: 'Meny', fBudget: 'Budsjett per person (kr)',
  chefNote: 'Jeg sender deg et menyforslag tilpasset budsjettet og dine ønsker.',
  fName: 'Navn', fEmail: 'E-post', fPhone: 'Telefon', fDate: 'Dato', fGuests: 'Antall gjester',
  fType: 'Type arrangement', fPlace: 'Adresse / sted (Oslo eller omegn)', fMsg: 'Allergier, ønsker og budsjett',
  types: ['Middag', 'Bursdag', 'Bryllup', 'Firma', 'Annet'],
  send: 'Send forespørsel', sending: 'Sender …',
  okTitle: 'Takk! Forespørselen er sendt.', okText: 'Jeg tar kontakt innen 24 timer.',
  err: 'Noe gikk galt. Prøv igjen, eller send e-post direkte til',
  emailSubject: 'Forespørsel privatkokk',
}
