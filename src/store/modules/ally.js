import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  allies: []
}

const actions = {
  addCharacter({ commit }, payload) {
    commit('ADD_CHARACTER', payload)
  },
  setActive({ commit }, payload) {
    commit('SET_ACTIVE', payload)
  }
}

const mutations = {
  ADD_CHARACTER(state, {
    name = 'default name',
    img = 'https://lorempixel.com/200/200/',
    health = '100',
    attack = '20',
    defence = '10',
    active = false
  } = {}) {
    state.allies.push({
      name,
      img,
      health,
      attack,
      defence,
      active
    })
  },
  SET_ACTIVE(state, { index, active }) {
    state.allies[index].active = active
  }
}

const getters = {
  allies: state => state.allies,
  activeIndex: state => state.allies.findIndex(ally => ally.active)
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}