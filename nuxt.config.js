import Sass from 'dart-sass';

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'หมา มช.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    noscript: [
      { innerHTML: 'This website requires JavaScript. เว็บไซต์นี้ใช้ JavaScipt ในการแสดงผล' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#b288bf' },
  /*
   ** Global CSS
   */
  loadingIndicator: {
    name: 'pulse',
    color: '#1b1b1b',
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
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
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
  router: {
    middleware: ['auth'],
  },
  pwa: {
    manifest: {
      name: 'เว็บไซต์จัดการข้อมูลสุนัข มหาวิทยาลัยเชียงใหม่',
      short_name: 'หมา มช.',
      lang: 'th',
      theme_color: '#d0b4fe',
    },
    meta: {
      name: 'เว็บไซต์จัดการข้อมูลสุนัข มหาวิทยาลัยเชียงใหม่',
      lang: 'th',
      theme_color: '#d0b4fe',
      nativeUI: true,
    },
  },
};
