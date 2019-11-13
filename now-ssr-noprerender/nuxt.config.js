const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'https://now-ssr-noprerender.jasperketone.now.sh'
  },
  generate: {
    dir: "public"
  },

  env: {
    API_URL:
      process.env.NODE_ENV === 'dev'
        ? 'http://localhost:3000'
        : 'https://now-ssr-noprerender.jasperketone.now.sh'
  },

  build: {

  env: {
    API_URL:
      process.env.NODE_ENV === 'dev'
        ? 'http://localhost:3000'
        : 'https://now-ssr-noprerender.jasperketone.now.sh'
  },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {

      }
    }
  }
}
