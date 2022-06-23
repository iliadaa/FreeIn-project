import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import dataStageList from '../../data-stages-list'
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registrations: [
      {
        "userObj":
        {
          "id": "0",
          "email": "test@gmail.com",
          "password": "test",
          "change": true,
          "name": "Admin",
          "surname": "Test",
          "testDone": true,
          "roles": ["admin", "business"],
          "profileTest":
          {
            "name": "Buongustaio",
            "description": "lorem ipsum",
            "arte": 40,
            "mare": 45,
            "cibo": 90,
            "relax": 60,
            "party": 50,
            "nature": 30,
          }
        }
      },
      {
        "userObj":
        {
          "id": "1",
          "email": "test-business@gmail.com",
          "password": "test",
          "change": true,
          "name": "Business",
          "surname": "Test",
          "testDone": true,
          "roles": ["business"],
          "profileTest":
          {
            "name": "Acculturato",
            "description": "lorem ipsum",
            "arte": 89,
            "mare": 50,
            "cibo": 10,
            "relax": 40,
            "party": 55,
            "nature": 20,
          }
        }
      },
      {
        "userObj":
        {
          "id": "2",
          "email": "test-testDone@gmail.com",
          "password": "test",
          "change": true,
          "name": "Tester",
          "surname": "Test",
          "testDone": false,
          "roles": ["private"],
          "profileTest":
          {
            "name": "Acculturato",
            "description": "lorem ipsum",
            "arte": 89,
            "mare": 50,
            "cibo": 10,
            "relax": 40,
            "party": 55,
            "nature": 20,
          }
        }
      },
    ],
    inSession: [],
    testToDo: [],
    testAnswers: [],
    dati: dataStageList

  },
  getters: {
  },
  mutations: {
    asksStore(state, answer) {
      state.testAnswers.push(answer)
      console.log(answer, " sono nel mutations")
      //se metto un ciclo for e dentro solo lo state.testAnswers[index] posso verificare tutte 
      //le risposte salvate
      console.log(state.testAnswers, " sono l'array")
    },
    isRole(state) {
      var trovato = false;
      console.log(state.inSession[0].userObj.roles)
      if (state.inSession[0].userObj.roles.includes("business" || "Business" || "admin" || "Admin")) {
        router.push({
          name: "BusinessProfile",
        });
        return trovato = true;
      } else {
        router.push({
          name: "Privatprofile",
        });
        return trovato = false;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
