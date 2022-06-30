import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import dataStageList from '../../data-stages-list'
import stagesJson from "/stages.json";
import itinerariesJson from "/itineraries.json";
import friendsJson from "/friends.json";
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
          "testDone": true,
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
    itineraries: [],
    typeStage: [],
    typeItinerary: [],
    typeFriends: "",
    typeFood: "",
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
      console.log(state.inSession[0].userObj.roles, "awee")
      //verifichiamo se test done 
      if (state.inSession[0].userObj.testDone == false) {
        alert("Dati corretti, esegua il test..")
        router.push({
          name: "Test"
        })
        return trovato = false;
      } else if (state.inSession[0].userObj.testDone == true) {
        alert("Bentornato: " + state.inSession[0].userObj.name)
        //test done controllo profilo e ridireziono su profilo 
        if (state.inSession[0].userObj.roles.includes("business" || "admin")) {
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
    isValidate(state, user) {
      var trovato;
      var i;
      var userData = {
        userObj: {
          id: user.id,
          email: user.email,
          password: user.password,
          name: user.name,
          surname: user.surname,
          testDone: user.testDone,
          roles: "private",
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
        },
      }
      console.log(userData, " Verifico che i dati inseriti siano validati correttamente")

      console.log(userData)
      for (i = 0; i < state.registrations.length; i++) {
        console.log(userData.userObj.email, "Sono l'user email")
        if (state.registrations[i].userObj.email.includes(userData.userObj.email)) {
          console.log("Ci sto", state)
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
        state.registrations.push(userData);
        alert("Nuovo utente registrato con successo")
        console.log(userData, "USER")
        router.push({
          name: "FirstPage",
        });
      }
    },
    clearInSession(state) {
      if (state.inSession.length == 1) {
        console.log("Non dovrò sostituire nulla!")
      } else {
        console.log("Devo sostituire il valore in arrivo!", state.inSession[1])
        state.inSession[0] = state.inSession[1];
      }
    },
    isCardType(state) {
      //prova solo con stage
      var i;
      console.log(stagesJson);
      for (i = 0; i < stagesJson.stages.length; i++) {
        if (stagesJson.stages[i].stage.type == "stage") {
          console.log("Stage +1");
          state.typeStage.push(stagesJson.stages[i].stage);
        } else if (stagesJson.stages[i].stage.type == "itinerary") {
          console.log("Itinerary +1");
          state.typeItinerary.push(stagesJson.stages[i].stage);
        }

      }
    }

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
