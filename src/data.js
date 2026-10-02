// Nom affiché et adresse de contact (à modifier)
export const BRAND = 'Mathis Cousyn'
export const CONTACT_EMAIL = 'mathis@cousyn.com'

// Suppléments (prix par personne en NOK)
export const EXTRAS = [
  { id: 'oysters', price: 190, no: 'Østers som forrett (3 per person)', en: 'Oysters as a starter (3 per person)' },
  { id: 'cheese', price: 120, no: 'Ostetallerken (4 oster)', en: 'Cheese platter (4 cheeses)' },
]

// Menus prêts à l'emploi : [norvégien, anglais] pour chaque texte
export const MENUS = [
  { id: 'sp', price: 750, name: ['Spansk inspirasjon', 'Spanish inspiration'], starter: ['Pan con tomate', 'Pan con tomate'], main: ['Kyllingsupreme med potetmos, hvitløk, chorizo & paprika', 'Chicken Supreme with potato purée, garlic, chorizo & paprika'], dessert: ['Appelsin med kanel', 'Orange with canel'] },
  { id: 'vege', price: 750, name: ['Vegetarianer', 'vegetarian'], starter: ['Tomatcarpaccio', 'Tomato Carpaccio'], main: ['aubergine og sopp curry', 'aubergine and mushrooms curry'], dessert: ['Armriddere & kandisert pære', 'Brioche French toast & candied pear'] },
  { id: 'sea', price: 890, name: ['Havets gaver', 'Gifts of the sea'], starter: ['Kamskjell, blomkål', 'Scallops, cauliflower'], main: ['Torsk, brunt smør, erter', 'Cod, brown butter, peas'], dessert: ['Sitronterte', 'Lemon tart'] },
  { id: 'veg', price: 690, name: ['Vegetar', 'Vegetarian'], starter: ['Rødbetcarpaccio, chèvre', 'Beetroot carpaccio, goat cheese'], main: ['Skogssopp-risotto', 'Wild mushroom risotto'], dessert: ['Eplekake, vaniljeis', 'Apple cake, vanilla ice cream'] },
  { id: 'nordic', price: 820, name: ['Nordisk tradisjon', 'Nordic tradition'], starter: ['Gravet laks, sennepssaus', 'Cured salmon, mustard sauce'], main: ['Lammekølle, rotgrønnsaker', 'Leg of lamb, root vegetables'], dessert: ['Karamellpudding', 'Caramel pudding'] },
  { id: 'it', price: 750, name: ['Italiensk aften', 'Italian evening'], starter: ['Burrata, tomat, basilikum', 'Burrata, tomato, basil'], main: ['Ravioli, ricotta og salvie', 'Ricotta & sage ravioli'], dessert: ['Tiramisu', 'Tiramisu'] },
  { id: 'seafeast', price: 1090, name: ['Sjømatfest', 'Seafood feast'], starter: ['Skalldyrsuppe', 'Shellfish bisque'], main: ['Sjøtunge, hvitvinssaus', 'Sole, white wine sauce'], dessert: ['Pannacotta, bær', 'Panna cotta, berries'] },
  { id: 'duck', price: 950, name: ['Andemeny', 'Duck menu'], starter: ['Andelever-terrin, brioche', 'Duck liver terrine, brioche'], main: ['Andebryst, appelsin', 'Duck breast, orange'], dessert: ['Sjokoladefondant', 'Chocolate fondant'] },
  { id: 'vegan', price: 720, name: ['Vegansk', 'Vegan'], starter: ['Gazpacho, urter', 'Gazpacho, herbs'], main: ['Linsegryte, sesongens grønnsaker', 'Lentil stew, seasonal vegetables'], dessert: ['Sjokolademousse, bær', 'Chocolate mousse, berries'] },
]

// Vos créations (galerie). Ajoutez des photos dans src/assets/creations/ : la 1re photo va avec le 1er plat, etc.
export const DISHES = [
  { emoji: '🦞', color: '#f3d9c9', name: ['Hummer, sitrus & smørsaus', 'Lobster, citrus & butter sauce'], tag: ['Forrett', 'Starter'] },
  { emoji: '🥩', color: '#e5cfc0', name: ['Lam fra Norge, rotgrønnsaker', 'Norwegian lamb, root vegetables'], tag: ['Hovedrett', 'Main'] },
  { emoji: '🐟', color: '#d8e4dc', name: ['Lakserøye, pepperrot & dill', 'Cured salmon, horseradish & dill'], tag: ['Forrett', 'Starter'] },
  { emoji: '🍄', color: '#e6dcc6', name: ['Skogssopp-risotto', 'Wild mushroom risotto'], tag: ['Vegetar', 'Vegetarian'] },
  { emoji: '🍓', color: '#f1d3d6', name: ['Jordbær, fløte & timian', 'Strawberries, cream & thyme'], tag: ['Dessert', 'Dessert'] },
  { emoji: '🍫', color: '#d9cbc2', name: ['Mørk sjokolade & havsalt', 'Dark chocolate & sea salt'], tag: ['Dessert', 'Dessert'] },
]

// Textes de l'interface (index 0 = norvégien, 1 = anglais)
export const UI = {
  navMenus: ['Menyer', 'Menus'], navCreations: ['Kreasjoner', 'Creations'], navHow: ['Slik fungerer det', 'How it works'], navBook: ['Bestill', 'Book'],
  heroTitle: ['Privatkokk i Oslo', 'Private chef in Oslo'],
  heroText: ['Restaurantopplevelsen hjemme hos deg. Sesongbaserte råvarer, skreddersydde menyer, middager for 2 til 20 gjester – i Oslo og omegn.', 'The restaurant experience in your own home. Seasonal ingredients, tailor-made menus, dinners for 2 to 20 guests – in Oslo and surroundings.'],
  heroCta: ['Send en forespørsel', 'Send a request'],
  menusTitle: ['Ferdige menyer', 'Ready-made menus'], menusSub: ['Tre retter til fast pris per person. Legg gjerne til ekstra.', 'Three courses at a fixed price per person. Add extras if you like.'],
  perPerson: ['kr / pers', 'NOK / pers'], choose: ['Velg denne menyen', 'Choose this menu'], extrasTitle: ['Ekstra', 'Extras'],
  creationsTitle: ['Mine kreasjoner', 'My creations'], creationsSub: ['Et utvalg retter fra tidligere middager.', 'A selection of dishes from past dinners.'],
  howTitle: ['Slik fungerer det', 'How it works'],
  steps: [
    [['1. Vi snakker sammen', '1. We talk'], ['Du forteller om anledning, antall gjester og allergier.', 'You tell me the occasion, number of guests and allergies.']],
    [['2. Jeg lager menyen', '2. I design the menu'], ['Et forslag basert på sesongens beste råvarer.', 'A proposal based on the best seasonal ingredients.']],
    [['3. Jeg kommer til deg', '3. I come to you'], ['Jeg handler, lager mat, serverer og rydder etter meg.', 'I shop, cook, serve and clean up afterwards.']],
  ],
  bookTitle: ['Forespørsel / bestilling', 'Request / booking'], bookSub: ['Fyll ut skjemaet, så svarer jeg innen 24 timer.', 'Fill in the form and I will reply within 24 hours.'],
  modeMenu: ['Jeg velger en ferdig meny', 'I choose a ready-made menu'], modeChef: ['Kokkens meny etter budsjett', "Chef's menu to my budget"],
  fMenu: ['Meny', 'Menu'], fBudget: ['Budsjett per person (kr)', 'Budget per person (NOK)'],
  chefNote: ['Jeg sender deg et menyforslag tilpasset budsjettet og dine ønsker.', 'I will send you a menu proposal matching your budget and wishes.'],
  fName: ['Navn', 'Name'], fEmail: ['E-post', 'Email'], fPhone: ['Telefon', 'Phone'], fDate: ['Dato', 'Date'], fGuests: ['Antall gjester', 'Guests'],
  fType: ['Type arrangement', 'Event type'], fPlace: ['Adresse / sted (Oslo eller omegn)', 'Address / area (Oslo or surroundings)'], fMsg: ['Allergier, ønsker og budsjett', 'Allergies, wishes and budget'],
  types: [['Middag', 'Dinner'], ['Bursdag', 'Birthday'], ['Bryllup', 'Wedding'], ['Firma', 'Corporate'], ['Annet', 'Other']],
  send: ['Send forespørsel', 'Send request'], sending: ['Sender …', 'Sending …'],
  okTitle: ['Takk! Forespørselen er sendt.', 'Thank you! Your request has been sent.'], okText: ['Jeg tar kontakt innen 24 timer.', 'I will get back to you within 24 hours.'],
  err: ['Noe gikk galt. Prøv igjen, eller send e-post direkte til', 'Something went wrong. Please try again, or email directly to'],
}
