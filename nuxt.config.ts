// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt', 
    '@nuxtjs/color-mode',
    'radix-vue/nuxt'
  ],
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    editorSupport: true
  }
})
