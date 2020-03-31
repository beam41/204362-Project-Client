import Sass from 'dart-sass';

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#733e85', height: '5px' },
  /*
   ** Global CSS
   */
  loadingIndicator: {
    name: 'pulse',
    color: '#333333',
    background: 'white',
  },
  css: ['~/assets/styles/component.scss', '~/assets/styles/class.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/index.ts'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-purgecss',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
    postcss: {
      plugins: {
        autoprefixer: {},
        'postcss-normalize': {},
        'postcss-short': {},
      },
    },
    loaders: {
      vue: {
        compilerOptions: {
          whitespace: 'condense',
        },
      },
      scss: {
        implementation: Sass,
      },
    },
  },
  purgeCSS: {
    // your settings here
  },
};
