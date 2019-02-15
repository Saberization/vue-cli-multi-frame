import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from '@router/router'
import ShowCase from './showcase.vue'
import '@assets/css/common.css'
import LazyLoad from 'mint-ui';

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(LazyLoad)

Vue.config.devtools = true;
Vue.config.productionTip = false;

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(ShowCase)
}).$mount('#app')