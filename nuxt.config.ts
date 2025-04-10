import Aura from '@primeuix/themes/aura'
import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-10',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxtjs/storybook'],
  primevue: { 
    options: {
      theme: {
        preset: Aura
      },
      prefix: 'p'
    },
    usePrimeVue: true,
    importPrimeIcons: true
  },
  typescript: {
    typeCheck: true
  },
  css: [
    'primeicons/primeicons.css'
  ],
  }
)
