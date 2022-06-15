import Vue from 'vue'
import Vuex from 'vuex'
import dataStageList from '../../data-stages-list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registrations: [],
    dati: dataStageList
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
