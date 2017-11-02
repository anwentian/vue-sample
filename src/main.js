import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routeConfig.js'
import axios from 'axios'
import store from './store'

Vue.use(VueRouter);


const router=new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
Vue.prototype.$http = axios 
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
