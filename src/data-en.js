import { BRAND, CONTACT_EMAIL } from './data.js'

export { BRAND, CONTACT_EMAIL }

export const EXTRAS = [
  { id: 'oysters', price: 190, label: 'Oysters as a starter (3 per person)' },
  { id: 'cheese', price: 120, label: 'Cheese platter (4 cheeses)' },
]

export const MENUS = [
  { id: 'sp', price: 750, name: 'Spanish inspiration', starter: 'Pan con tomate', main: 'Chicken Supreme with potato purée, garlic, chorizo & paprika', dessert: 'Orange with canel' },
  { id: 'vege', price: 750, name: 'vegetarian', starter: 'Tomato Carpaccio', main: 'aubergine and mushrooms curry', dessert: 'Brioche French toast & candied pear' },
]

export const DISHES = [
  { name: 'Salmon Gravlax in Beetroot Cured, cucumber, beetroot chips, citrus & passion fruit', tag: 'Starter' },
  { name: 'Duck breast, mashed potatoes, and glazed carrot', tag: 'Main' },
  { name: 'Chocolate Fondant & Crème Anglaise', tag: 'dessert' },
]

export const UI = {
  navMenus: 'Menus', navCreations: 'Creations', navHow: 'How it works', navBook: 'Book',
  heroTitle: 'Private chef in Oslo',
  heroText: 'The restaurant experience in your own home. Seasonal ingredients, tailor-made menus, dinners for 2 to 20 guests – in Oslo and surroundings.',
  heroCta: 'Send a request',
  menusTitle: 'Ready-made menus', menusSub: 'Three courses at a fixed price per person. Add extras if you like.',
  perPerson: 'NOK / pers', choose: 'Choose this menu',
  creationsTitle: 'My creations', creationsSub: 'A selection of dishes from past dinners.',
  howTitle: 'How it works',
  steps: [
    ['1. We talk', 'You tell me the occasion, number of guests and allergies.'],
    ['2. I design the menu', 'A proposal based on the best seasonal ingredients.'],
    ['3. I come to you', 'I shop, cook, serve and clean up afterwards.'],
  ],
  bookTitle: 'Request / booking', bookSub: 'Fill in the form and I will reply within 24 hours.',
  modeMenu: 'I choose a ready-made menu', modeChef: "Chef's menu to my budget",
  fMenu: 'Menu', fBudget: 'Budget per person (NOK)',
  chefNote: 'I will send you a menu proposal matching your budget and wishes.',
  fName: 'Name', fEmail: 'Email', fPhone: 'Phone', fDate: 'Date', fGuests: 'Guests',
  fType: 'Event type', fPlace: 'Address / area (Oslo or surroundings)', fMsg: 'Allergies, wishes and budget',
  types: ['Dinner', 'Birthday', 'Wedding', 'Corporate', 'Other'],
  send: 'Send request', sending: 'Sending …',
  okTitle: 'Thank you! Your request has been sent.', okText: 'I will get back to you within 24 hours.',
  err: 'Something went wrong. Please try again, or email directly to',
  emailSubject: 'Private chef request',
}
