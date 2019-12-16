import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'
import Accounting from 'accounting-js'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash }
    }
  }
})

Vue.filter('currency', val => Accounting.formatMoney(val))

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
