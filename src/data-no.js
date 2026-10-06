import { BRAND, CONTACT_EMAIL } from './data.js'

const aboutMe = `Jeg heter Mathis og er en fransk kokk bosatt i Oslo.

Jeg vokste opp i nærheten av Nice, hvor matlaging handlet om gode råvarer, tydelige smaker og gleden ved å dele mat med andre. Reisen min har siden ført meg gjennom ulike kjøkken, fra Sør-Frankrike til Oslo, hvor jeg fikk muligheten til å jobbe på et japansk Omakase-kjøkken med Michelin-stjerne.

Den erfaringen endret måten jeg ser på matlaging.

Det japanske kjøkkenet lærte meg å sette pris på råvarene for det de faktisk er. Noen ganger er det beste du kan gjøre ganske enkelt å ikke komme i veien for dem. En fantastisk fisk, en sesongbasert grønnsak eller en god saus trenger ikke alltid ti andre elementer rundt seg.

Samtidig har jeg aldri ønsket å legge bak meg generøsiteten og karakteren jeg vokste opp med gjennom fransk og middelhavsinspirert matlaging.

Derfor leter jeg hele tiden etter balansen mellom de to.

Nok teknikk til å skape noe spesielt.
Nok enkelhet til å la råvarene få snakke for seg selv.
Nok kreativitet til å gjøre hver rett til min egen.

Det er dette jeg ønsker å bringe til mine private middager: gjennomtenkt mat, gode råvarer og menyer som føles raffinerte uten å bli kompliserte.

For meg handler matlaging om å finne dette perfekte balansepunktet – mellom enkelhet og kreativitet, presisjon og intuisjon, tradisjon og nysgjerrighet.`;

export { BRAND, CONTACT_EMAIL }

export const EXTRAS = [
  { id: 'oysters', price: 190, label: 'Østers som forrett (3 per person)' },
  { id: 'cheese', price: 120, label: 'Ostetallerken (4 oster)' },
]

export const MENUS = [
  { id: 'SH', price: 1500, name: 'Skjørt Høstfall', starter: 'Stekte Kantareller, Langtidsstekt Egg, Parmesan-Krem & Krutonger', main: 'Stekt Andebryst & Rødbete, Sellerirotpuré & Solbærsjy', dessert: 'Sitron-is, Frisk Mynte' },
  { id: 'FM', price: 1500, name: 'Franske Minner', starter: 'Croque Monsieur, Trøffelsmør, Skinke, Comté-ost', main: 'Biff Bourguignon, Hjemmelaget Potetmos, Glaserte Gulrøtter', dessert: 'Rødbete-Tatin, Frisk Geitost, Valnøtter, Balsamico-reduksjon' },
  { id: 'FJH', price: 1500, name: 'Fra Jord & Hav', starter: 'Butternut-puré, Chips av Spekeskinke', main: 'Stekt torsk, Grillet Bladgrønt, Beurre Blanc', dessert: 'Crème Brûlée' },

]

export const DISHES = [
  { name: 'Rødbetgravet laks, agurk, rødbetchips, sitrus og pasjonsfrukt', tag: 'Forrett' },
  { name: 'Andebryst, potetmos og glasert gulrot', tag: 'Hovedrett' },
  { name: 'Sjokoladefondant og Crème Anglaise', tag: 'dessert' },
]

export const UI = {
  navAbout: 'Om meg', navMenus: 'Menyer', navCreations: 'Kreasjoner', navHow: 'Slik fungerer det', navBook: 'Bestill',
  heroTitle: 'Et fransk preg på enhver anledning',
  heroText: 'Med utgangspunkt i franske mattradisjoner og erfaring fra gourmetrestauranter, komponerer jeg raffinerte, sesongbaserte menyer for private middager og spesielle anledninger - og tilfører hvert måltid håndverk på restaurantnivå, sans for detaljer og et personlig preg',
  heroCta: 'Send en forespørsel',
  aboutTitle: 'Om meg', aboutText: aboutMe,
  menusTitle: 'Sesongen på tallerkenen | høsten 2026', menusSub: 'Omhyggelig sammensatte menyer, inspirert av de beste sesongråvarene, som bringer følelsen av en restaurantopplevelse hjem til deg',
  perPerson: 'kr / pers', choose: 'Velg denne menyen',
  creationsTitle: 'Mine kreasjoner',
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
