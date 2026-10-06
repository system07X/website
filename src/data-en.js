import { BRAND, CONTACT_EMAIL } from './data.js'

const aboutMe = `I’m Mathis, a French chef based in Oslo.

I grew up around Nice, where cooking was all about good ingredients, strong flavours and sharing food with people. My journey then took me through different kitchens, from the South of France to Oslo, where I had the chance to work in a Michelin-starred Japanese Omakase kitchen.

That experience changed the way I see cooking.

Japanese cuisine taught me to appreciate ingredients for what they are. Sometimes, the best thing you can do is simply not get in their way. A great piece of fish, a seasonal vegetable, a good sauce — they don’t always need ten other things around them.

At the same time, I never wanted to leave behind the generosity and character I grew up with in French and Mediterranean cooking.

So I’m constantly looking for the balance between the two.

Enough technique to create something special.
Enough simplicity to let the ingredients speak.
Enough creativity to make every dish my own.

That’s what I try to bring to my private dinners: thoughtful food, beautiful ingredients, and menus that feel refined without feeling complicated.

For me, cooking is about finding that sweet spot — between simplicity and creativity, precision and instinct, tradition and curiosity.`;

export { BRAND, CONTACT_EMAIL }

export const EXTRAS = [
  { id: 'oysters', price: 190, label: 'Oysters as a starter (3 per person)' },
  { id: 'cheese', price: 120, label: 'Cheese platter (4 cheeses)' },
]

export const MENUS = [
  { id: 'DNE', price: 1500, name: 'Delicate Fall', starter: 'Sautéed Chanterelles, Slow-cooked Egg, Parmesan Cream & Croutons', main: 'Roasted Duck Breast & Beetroot, Celeriac Purée & Blackcurrant Jus', dessert: 'Iced Lemon, Fresh Mint' },
  { id: 'FM', price: 1500, name: 'French Memories', starter: 'Croque Monsieur, Truffle Butter, Ham, Comté Cheese', main: 'Beef Bourguignon, Homemade Mashed Potatoes, Glazed Carrots', dessert: 'Beetroot Tatin, Fresh Goat Cheese, Walnuts, Balsamic Vinegar Reduction' },
  { id: 'FES', price: 1500, name: 'From Earth & Sea', starter: 'Butternut Purée, Dry Ham Chips', main: 'Roasted Cod, Grilled Leaf, Beure Blanc', dessert: 'Crème Brulée' },
]

export const DISHES = [
  { name: 'Salmon Gravlax in Beetroot Cured, cucumber, beetroot chips, citrus & passion fruit', tag: 'Starter' },
  { name: 'Duck breast, mashed potatoes, and glazed carrot', tag: 'Main' },
  { name: 'Chocolate Fondant & Crème Anglaise', tag: 'dessert' },
]

export const UI = {
  navAbout: 'About me', navMenus: 'Menus', navCreations: 'Creations', navHow: 'How it works', navBook: 'Book',
  heroTitle: 'A French Touch to Every Occasion',
  heroText: 'Drawing on a French culinary background and fine-dining experience, I create refined, seasonal menus for private dinners and special occasions - bringing restaurant-level craft, attention to detail and a personal touch to every table',
  heroCta: 'Send a request',
  aboutTitle: 'About me', aboutText: aboutMe,
  menusTitle: 'The Season, on Your Plate | Fall 2026', menusSub: 'Thoughtfully crafted menus inspired by the best seasonal ingredients, bringing the spirit of a restaurant experience to the comfort of your home.',
  perPerson: 'NOK / pers', choose: 'Choose this menu',
  creationsTitle: 'My creations',
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
