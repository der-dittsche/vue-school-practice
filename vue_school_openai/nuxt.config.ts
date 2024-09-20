// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    public: {
      openAiKey: process.env.NUXT_OPENAI_API_KEY
    }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  ssr: false,
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss']
})