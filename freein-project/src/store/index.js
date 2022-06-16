import Vue from 'vue'
import Vuex from 'vuex'
import dataStageList from '../../data-stages-list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registrations: [],
    admin: [{email: 'test@gmail.com', password: '123', name: 'Admin', surname: 'Test'}],
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
