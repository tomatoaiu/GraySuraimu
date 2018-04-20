import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './index.vue'

import { store } from './store'

Vue.use(BootstrapVue)
Vue.use(Vuex)

const Main = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

export default Main