import { createBuilder } from 'vite'

// react-dom/server (bundlé pour le prérendu) laisse un MessageChannel ouvert :
// le build se termine mais Node ne quitte jamais. On sort explicitement.
try {
  const builder = await createBuilder()
  await builder.buildApp()
  process.exit(0)
} catch (e) {
  console.error(e)
  process.exit(1)
}
