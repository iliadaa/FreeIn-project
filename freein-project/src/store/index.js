import Vue from 'vue'
import Vuex from 'vuex'
import dataStageList from '../../data-stages-list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registrations: [{ "userObj": {"id": "0", "email": "test@gmail.com", "password": "test", "change": true, "name": "Admin", "surname": "Test", "testDone": true }}],
    inSession: [],
    testToDo: [],
    testAnswers: [],
    dati: dataStageList
   
  },
  getters: {
  },
  mutations: {
    asksStore (state, answer){
      state.testAnswers.push(answer)
      console.log(answer, " sono nel mutations")
      console.log(state.testAnswers)
    }
  },
  actions: {
  },
  modules: {
  }
})
