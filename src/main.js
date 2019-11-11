import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
