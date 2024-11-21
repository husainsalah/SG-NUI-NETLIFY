import { createApp } from 'vue'
import App from './app.vue'
import Vue from 'vue'
import router from '#vue-router'

// Create and mount Vue app
const app = createApp(App)
app.use(router)
Vue.useHead({ title: JSON.stringify('Sum Good Art: Scott Grooves Art Practice') })
useHead({ title: JSON.stringify('Sum Good Art: Scott Grooves Art Practice') })
app.mount('#app')
