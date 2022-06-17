import Vue from 'vue'
import Vuex from 'vuex'
import dataStageList from '../../data-stages-list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registrations: [{ "userObj": {"id": "0", "email": "test@gmail.com", "password": "test", "change": true, "name": "Admin", "surname": "Test", "testDone": true }}],
    inSession: [],
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
