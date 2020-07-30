export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */

//  <meta name="twitter:title" content="Precision health plans for a better you | wellOwise">
//  <meta name="twitter:description" content="We use the power of scientific data to identify all that is unique about your health, and give you a personalized diet and lifestyle plan that not only helps you in disease prevention but also enhances your overall wellness.">
//  <meta name="twitter:image" content="https://wellowise.com/assets/images/logo_3.png" />

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', property: 'description', name: 'description', content: 'We are an NGO working towards spreading awareness about the impact of resource wastage and trying to bring about a change by utilizing the existing resources to their full capacity.' },
      { hid: 'og:site_name', property: 'og:site_name', name: 'og:site_name', content: 'Resource Council' },
      { hid: 'twitter:card', property: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', name: 'twitter:site', content: '@resourcecouncil' },
      { hid: 'og:type', property: 'og:type', name: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', name: 'og:url', content: 'https://resource-council.vercel.app/' },
      { hid: 'og:title', property: 'og:title', name: 'og:title', content: 'Resource Council | Moving towards Zero Resource Wastage' },
      { hid: 'og:description', property: 'og:description', name: 'og:description', content: 'We are an NGO working towards spreading awareness about the impact of resource wastage and trying to bring about a change by utilizing the existing resources to their full capacity.' },
      { hid: 'og:image', property: 'og:image', name: 'og:image', content: 'https://resource-council.vercel.app/logo.svg' },
      { hid: 'twitter:title', property: 'twitter:title', name: 'twitter:title', content: 'Resource Council | Moving towards Zero Resource Wastage' },
      { hid: 'twitter:description', property: 'twitter:description', name: 'twitter:description', content: 'We are an NGO working towards spreading awareness about the impact of resource wastage and trying to bring about a change by utilizing the existing resources to their full capacity.' },
      { hid: 'twitter:image', property: 'twitter:image', name: 'twitter:image', content: 'https://resource-council.vercel.app/logo.svg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
