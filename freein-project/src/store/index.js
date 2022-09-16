import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import dataStageList from '../../data-stages-list'
import stagesJson from "/stages.json";
import itinerariesJson from "/itineraries.json";
import UsersJson from "/Users.json";
const usersURL = "http://localhost:3000/registrations"
import friendsJson from "/friends.json";
import { faLessThanEqual, faUnderline } from '@fortawesome/free-solid-svg-icons'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stagestore: [],
    itinerariestore: [],
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
          "id": "2",
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
          "id": "3",
          "email": "test-private@gmail.com",
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
    typeStage: false,
    typeItinerary: false,
    typeFriends: "",
    typeFood: "",
    available: false,
    count: 0,

  },
  getters: {
  },
  mutations: {
    asksStore(state, answer) {
      if (state.inSession.length != undefined) {
        state.inSession[0].userObj.testAnswers.push(answer);
      } else {
        //console.log("Non riesco ad accedere all'inSession")
      }

      //se metto un ciclo for e dentro solo lo state.testAnswers[index] posso verificare tutte 
      //le risposte salvate

    },

    genderAsk(state, answer) {
      state.inSession[0].userObj.gender = answer;
    },

    isRole(state) {
      var trovato = false;
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
          gender: "",
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
          },
          testAnswers: [],
          paymentMethod: "",
          agency: {
            ragioneSociale: "",
            indirizzoMailAziendale: "",
            espositore: ""
          }
        },
      }


      for (i = 0; i < UsersJson.registrations.length; i++) {
        if (UsersJson.registrations[i].userObj.email.includes(userData.userObj.email)) {
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
        UsersJson.registrations.push(userData);
        alert("Esegui un piccolo test per completare correttamente la tua registrazione! Intanto benvenuto!!")
        state.inSession.push(userData)
        router.push({
          name: "Test",
        });
      }
    },

    clearInSession(state) {
      if (state.inSession.length == 1) {
        //console.log("Non dovrò sostituire nulla!")
      } else {
        state.inSession.splice(0, 1);
      }
    },

    isUserType(state) {
      var inAccultured = false; // it means in Acculturato
      var inFoodie = false; //it means in Buongustaio
      if (state.inSession[0].userObj.testAnswers.includes("Hamburger" && "Street Food")) {
        inFoodie = true;
        router.push({
          name: "TestEnd2"
        })
      } else if (state.inSession[0].userObj.testAnswers.includes("13-22" && "Gourmet")) {
        inAccultured = true;
        router.push({
          name: "TestEnd"
        })
      } else {
        //console.log("Devo decidere dove mandarlo!");
      }

    },

    isUserBusiness(state, value) {
      state.inSession[0].userObj.paymentMethod = value;
    },

    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },


  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }

  },
  modules: {
  }
})
