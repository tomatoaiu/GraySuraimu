import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  enemies: []
}

const actions = {
  addCharacter({ commit }, payload) {
    commit('ADD_CHARACTER', payload)
  },
  setActive({ commit }, payload) {
    commit('SET_ACTIVE', payload)
  },
  setHealth({ commit }, payload) {
    commit('SET_HEALTH', payload)
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
    state.enemies.push({
      name,
      img,
      health,
      attack,
      defence,
      active
    })
  },
  SET_ACTIVE(state, { index, active }) {
    state.enemies[index].active = active
  },
  SET_HEALTH(state, payload) {
    // const enemy = state.enemies.filters(enemy => payload.enemy.a
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