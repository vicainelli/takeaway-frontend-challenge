import Vue from 'vue'
import App from './App.vue'
import router from './routes/'
import store from './store/'
import { createI18n } from './plugins/i18n'
import '@/assets/css/main.css'

const i18n = createI18n()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
