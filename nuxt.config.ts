import eslintPlugin from 'vite-plugin-eslint'
import stylelintPlugin from 'vite-plugin-stylelint'

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  // https://github.com/nuxt/nuxt/issues/20211
  experimental: {
    renderJsonPayloads: true
  },

  typescript: {
    // strict: true
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#css
  css: ['@/assets/styles/main.scss'],

  // https://nuxt.com/docs/api/configuration/nuxt-config#build
  build: {
    transpile: isProd
      ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer']
      : ['@juggle/resize-observer']
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#vite
  vite: {
    optimizeDeps: {
      include: isDev ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone'] : []
    },

    css: {
      preprocessorOptions: {
        // https://nuxt.com/docs/getting-started/assets#global-styles-imports
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;'
        }
      }
    },

    plugins: isDev ? [eslintPlugin(), stylelintPlugin()] : []
  },

  postcss: {
    plugins: {
      'postcss-simple-vars': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 15000,
      maxSize: 250000,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000
    }
  },

  site: {
    url: 'https://sumgoodart.com',
    name: 'Scott Grooves Art',
    description: 'Detroit-based interdisciplinary artist Scott Grooves Art Webiste',
    defaultLocale: 'en',
    trailingSlash: true
  },
  server: {
    hmr: {
      clientPort: 3000
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtseo/module'],
  compatibilityDate: '2024-11-18'
})
