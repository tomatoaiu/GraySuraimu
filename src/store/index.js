import Vue from 'vue'
import Vuex from 'vuex'
import ally from './modules/ally'
import enemy from './modules/enemy'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    ally,
    enemy
  }
})