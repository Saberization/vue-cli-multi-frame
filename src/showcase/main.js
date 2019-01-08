import Vue from 'vue'
import Vuex from 'vuex'
import ShowCase from './showcase.vue'
import '@assets/css/common.css'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(ShowCase)
}).$mount('#app')