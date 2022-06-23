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
          "id": "1",
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
          "password": "TEST",
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
    },
    isValidate(state, user) {
      var trovato;
      var i;
      var userObj = {
        userObj: {
          id: user.id,
          email: user.email,
          password: user.password,
          name: user.name,
          surname: user.surname,
          testDone: user.testDone,
        },
        profileTest: {
          name: "",
          description: "lorem ipsum",
          arte: undefined,
          mare: undefined,
          cibo: undefined,
          relax: undefined,
          party: undefined,
          nature: undefined,
        }
      }
      console.log(userObj, " Verifico che i dati inseriti siano validati correttamente")
      console.log(state.registrations[1].userObj)
      console.log(userObj)
      for (i = 0; i < state.registrations.length; i++) {
        if (state.registrations[i].userObj.email == userObj.email && state.registrations[i].userObj.password == userObj.password) {
          console.log("Ci sto")
          alert("Email già registrata, esegui il login!")
          router.push({
            name: "FirstPage",
          });
          trovato = true;
          break;
        } else {
          trovato = false;
        }
      }
      if (trovato == false) {
        state.registrations.push(userObj);
        alert("Nuovo utente registrato con successo")
        console.log(state.registrations)
        router.push({
          name: "FirstPage",
        });
      }
    },

  },
  actions: {
    /* 
    isValidateAsync({ commit }) {
      if (commit == false) {
        state.registrations.push(user)
      }else{
        console.log("Sono qui")
      }
    },
    */
  },
  modules: {
  }
})
