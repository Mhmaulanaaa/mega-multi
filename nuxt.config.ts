// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  css: [
    '~/assets/css/main.css'
  ],
  app: {
    head: {
      title: 'Mega Multi Pegas',
      titleTemplate: '%s  | Landing Page',

      meta: [
        {
          name: 'description',
          content: 'Mega Multi Pegas'
        }
      ]
    }
  }
})