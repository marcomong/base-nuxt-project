export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Buono-And-Healthy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  styleResources: {
    scss: [
      '~/assets/styles/_global.scss'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/i18n.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-i18n'
  ],

  i18n: {
    locales:
      [
        { code: 'en', iso: 'en-US', name: 'en', file: 'en-US.js' },
        { code: 'it', iso: 'it-IT', name: 'it', file: 'it-IT.js' },
      ],
    lazy: true,
    langDir: 'lang/',
    baseUrl: `https://localhost:3000.com`,
    defaultLocale: 'en',
    detectBrowserLanguage: {
      onlyOnRoot: true,
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET || 'api secret here'
  }
}
