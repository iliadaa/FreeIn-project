import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import dataStageList from '../../data-stages-list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registrations: [
        { "userObj": 
          {
            "id": "0", 
            "email": "test@gmail.com", 
            "password": "test", 
            "change": true, 
            "name": "Admin", 
            "surname": "Test", 
            "testDone": true ,
            "roles":["admin","business"],
            "profile-test":
              {
                "name":"Buongustaio",
                "description":"lorem ipsum",
                "arte":40,
                "mare":45,
                "cibo":90,
                "relax":60,
                "party":50,
                "nature":30,
              }            
          }
        },
        { "userObj": 
          {
            "id": "1", 
            "email": "test-private@gmail.com", 
            "password": "test", 
            "change": true, 
            "name": "Private", 
            "surname": "Test", 
            "testDone": true ,
            "roles":["private"],
            "profile-test":
              {
                "name":"Buongustaio",
                "description":"lorem ipsum",
                "arte":40,
                "mare":45,
                "cibo":90,
                "relax":60,
                "party":50,
                "nature":30,
              }            
          }
        },
        { "userObj": 
          {
            "id": "3", 
            "email": "test-business@gmail.com", 
            "password": "test", 
            "change": true, 
            "name": "Business", 
            "surname": "Test", 
            "testDone": true ,
            "roles":["business"],
            "profile-test":
              {
                "name":"Acculturato",
                "description":"lorem ipsum",
                "arte":89,
                "mare":50,
                "cibo":10,
                "relax":40,
                "party":55,
                "nature":20,
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
    asksStore (state, answer){
      state.testAnswers.push(answer)
      console.log(answer, " sono nel mutations")
      //se metto un ciclo for e dentro solo lo state.testAnswers[index] posso verificare tutte 
      //le risposte salvate
      console.log(state.testAnswers, " sono l'array")
    },
    register (state, user, registrations){
      var i
      var total = state.registrations.length
      let trovato=false;
      console.log(total==0?"niente":[...state.registrations]);
      for (i = 0; i < total; i++) {
        if (user.email == state.registrations[i].userObj.email) {
          trovato=true;
          alert("Dati inseriti già registrati! Procedi con il login")
          router.push({
            name: "FirstPage",
            });
          break;
        } 
      
      if (!trovato){
        alert("Registrazione completata con successo, procedi con il login!")
        router.push({
        name: "FirstPage",
        });
          state.registrations.push({user});
          registrations[i].userObj.id = i;
          //this.form.registered;
      }
    }
  
      }
    },
  actions: {
  },
  modules: {
  }
})
