import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ShowCase from './showcase.vue'
import '@assets/css/common.css'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(ShowCase)
}).$mount('#app')