export default {
  mode: 'static',
  router: {
    base: 'https://github.com/huyhoang0210/deploy-test'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-i18n',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-i18n',
      {
          locales: [
              {
                  code: 'vi',
                  file: 'vi.js',
                  name: 'Tiếng Việt',
              },
              {
                  code: 'en',
                  file: 'en.js',
                  name: 'english',
              },
          ],
          detectBrowserLanguage: {
              useCookie: true,
              cookieKey: 'i18n_redirected',
          },
          langDir: 'lang/',
          vueI18nLoader: true,
          defaultLocale: 'vi',

          vueI18n: {
              fallbackLocale: 'vi',
          },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
