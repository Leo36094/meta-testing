import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const metas = {
  description: "build 產生的 meta description",
  image:
    "https://web.df.garena.com/03_news/news_banner/TWannouncement/20250314_MobileAnnouncement/1920TW.jpg",
  "og:image": "https://web.df.garena.com/03_news/news_banner/TWannouncement/20250314_MobileAnnouncement/1920TW.jpg",
  "og:description": "build 產生的 meta description",
  "og:title": "build 產生的 meta title",
  "og:url": "https://meta-testing-three.vercel.app/", // Replace with your actual domain
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'inject-meta',
      transformIndexHtml(html) {
        return html
          .replace('<meta name="description" content="">', `<meta name="description" content="${metas.description}">`)
          .replace('<meta name="image" content="">', `<meta name="image" content="${metas.image}">`)
          .replace('<meta name="og:image" content="">', `<meta name="og:image" content="${metas["og:image"]}">`)
          .replace('<meta name="og:description" content="">', `<meta name="og:description" content="${metas["og:description"]}">`)
          .replace('<meta name="og:title" content="">', `<meta name="og:title" content="${metas["og:title"]}">`)
          .replace('<meta name="og:url" content="">', `<meta name="og:url" content="${metas["og:url"]}">`)
          .replace('<title>Vite App</title>', `<title>${metas["og:title"]}</title>`);
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
