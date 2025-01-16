// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/app.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image:{},
  app: {
    head: {
      link: [{ rel: 'icon', type:'image/x-icon', href:'/favicon.ico' }]
    }
  },

  modules: ['@nuxt/image'],
})