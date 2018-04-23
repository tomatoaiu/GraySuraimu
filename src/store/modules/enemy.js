import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  enemies: []
}

const actions = {
  addCharacter({ commit }, payload) {
    commit('ADD_CHARACTER', payload)
  }
}

const mutations = {
  ADD_CHARACTER(state, {
    name = 'default name',
    img = 'https://lorempixel.com/200/200/',
    health = '100',
    attack = '20',
    defence = '10',
  } = {}) {
    state.enemies.push({
      name,
      img,
      health,
      attack,
      defence,
    })
  }
}

const getters = {
  enemies: state => state.enemies
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}