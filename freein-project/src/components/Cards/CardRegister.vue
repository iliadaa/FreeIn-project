<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-b">
        <h2>Returning User</h2>
        <div class="card-login">
          <!-- vedi vecchio codice login ed usalo qui -->
          <b-form v-if="show">
            <b-input-group>
              <input class="email" placeholder="Email" v-model="user.email" />
            </b-input-group>
            <b-input-group>
              <input
                class="password"
                placeholder="Password"
                v-model="user.password"
                type="password"
                required=""
                id="myInput2"
              />
              <i
                v-if="!hide"
                class="far fa-solid fa-eye-slash"
                @click="showPass"
                style="margin-left: -30px; margin-top: 13px"
              ></i>
              <i
                v-else
                class="far fa-eye"
                @click="showPass"
                style="margin-left: -30px; margin-top: 13px"
              ></i>
            </b-input-group>
            <b-input-group>
              <input
                class="name"
                placeholder="Name"
                required=""
                v-model="user.name"
              />
            </b-input-group>
            <b-input-group>
              <input
                class="surname"
                placeholder="Surname"
                required=""
                v-model="user.surname"
              />
            </b-input-group>
            <!-- questo p class deve essere un a con style: text-decoration: none -->
            <b-button
              class="sign-up-btn"
              @click="user.change = !user.change ,registerUser(user, registrations, total)"
              type="submit"
              >SIGN UP</b-button
            >
          </b-form>
        </div>
        <div class="login-with-btn-hrefs">
          <p>- or -</p>
          <div class="href-buttons-rounded">
            <a class="fab fa-facebook-f" href="#"></a>
            <a class="fab fa-twitter" href="#"></a>
            <a class="fab fa-google-plus-g" href="#"></a>
            <a class="fab fa-microsoft" href="#"></a>
            <a class="fab fa-linkedin" href="#" style="margin-right: 20px"></a>
          </div>
        </div>
      </div>

      <div class="card card-r">
        <h2>Hello, Friend!<b-icon class="bar-chart-line-fill"></b-icon></h2>
        <p>Click the button below to log in</p>
        <p style="margin-bottom: 20px">into your account!</p>
        <b-button class="log-in" @click="changePage(true)">LOG IN</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: "",
        email: "",
        password: "",
        change: false,
        name: "",
        surname: "",
        testDone: false,
      },
      hide: false,
      show: true,
    };
  },
  methods: {
    //i think that i need to have a login page where i can get after the sign in is ended
    changePage(change) {
      if (change == true) {
        this.$router.push({
          name: "FirstPage",
        });
      }
    },

    correctData(email, password, name, surname) {
      //console.log(email + password);
      if (email.includes("@gmail" || "@outlook" || "@yahoo")) {
        alert("I dati inseriti sono corretti! Ora esegui il login!!");
        this.changePage(true);
        console.log("L'email è scritta correttamente!");
        if (name.length > 2) {
          alert("ciao " + name.length);
          console.log("Sono qui");
        }
      } else {
        alert("L'email deve contenere una @ seguita da: gmail, outlook..");
        console.log("Non è presente la @");
      }
    },
    onSubmit(event) {
      event.preventDefault();
      this.correctData(this.user.email, this.user.password, this.user.change);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our user values
      this.user.email = "";
      this.user.password = "";
      // Trick to reset/clear native browser user validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    showPass(hide) {
      //mai usare gli stessi id input perché il sistema non riuscirà a capire quale dei due stiamo triggerando
      //quindi in uno dei due non eseguirà l'azione in modo corretto
      //uso quindi myInput2 anziché myInput perchè viene già usato in cardLogin
      var x = document.getElementById("myInput2");
      if (x.type === "password") {
        x.type = "text";
        this.hide = true;
      } else {
        x.type = "password";
        this.hide = false;
      }
    },
    registerUser (userObj, registrations, total){
      var i
      let trovato=false;
      console.log(total);
      console.log(total==0?"niente":[...registrations]);
      for (i = 0; i < total; i++) {
        if (userObj.email == registrations[i].userObj.email) {
          trovato=true;
          alert("Dati inseriti già registrati! Procedi con il login")
          this.$router.push({
          name: "FirstPage",
        });
          break;
        } 
      }
      if (!trovato){
        this.correctData(this.user.email, this.user.password, this.user.change);
          registrations.push({userObj});
          registrations[i].userObj.id = i;
          console.log(userObj)
          //this.form.registered;
      }
    },
    /*
    unregister(registrations){
      const user = this.$store.registrations.find(user => {
        return user.email == registrations.email;
      });
      user.registered = false;
      this.$store.restrations.splice(this.$store.registrations.indexOf(registrations), 1);
    } 
    */
  },

  computed: {
    dati() {
      return this.$store.state.dati;
    },
    registrations(){
      return this.$store.state.registrations;
    },
    total(){
      return this.$store.state.registrations.length;
    }
  }
};
</script>

<style scoped>
.container {
  margin-bottom: 100px;
  margin-top: 40px;
  align-content: center;
  justify-content: center;
  display: flex;
}

.card {
  height: 600px;
  width: 0%;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.card-r {
  background-color: #ea5b0c;
  justify-content: center;
  align-items: center;
}

.card-group {
  align-content: center;
  justify-content: center;
  display: flex;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  width: 80%;
  height: 100%;
  border-radius: 20px;
}

.card-group h2 {
  color: gray;
}

.card-r p {
  color: white;
  font-size: 20px;
  margin-bottom: -10px;
}

.card-r h2 {
  color: white;
  margin-bottom: -5px;
  margin-left: 25px;
}

.log-in {
  border-radius: 20px;
  border-color: white;
  background-color: #ea5b0c;
  color: white;
}

.log-in:hover {
  border-color: white;
  background-color: #ea5b0c;
}

.card-login {
  width: 75%;
  height: 60%;
  background-color: rgba(0, 0, 0, 0.014);
}

.email {
  margin-bottom: 20px;
  margin-top: 40px;
  margin-left: 20px;
  width: 90%;
  font-size: 25px;
  box-shadow: 0px 0px 10px lightgrey;
  background-color: lightgrey;
  border-color: transparent;
}

.password {
  margin-left: 20px;
  width: 90%;
  font-size: 25px;
  box-shadow: 0px 0px 10px lightgrey;
  background-color: lightgrey;
  border-color: transparent;
}

.name {
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 20px;
  width: 90%;
  font-size: 25px;
  box-shadow: 0px 0px 10px lightgrey;
  background-color: lightgrey;
  border-color: transparent;
}

.surname {
  margin-left: 20px;
  width: 90%;
  font-size: 25px;
  box-shadow: 0px 0px 10px lightgrey;
  background-color: lightgrey;
  border-color: transparent;
}

.forgot-password {
  margin-left: 100px;
  margin-top: 50px;
  font-size: 20px;
}

.sign-up-btn {
  margin-top: 20px;
  margin-left: 120px;
  border-radius: 30px;
  font-size: 120%;
  border-color: white;
  background-color: #ea5b0c;
  color: white;
  align-items: center;
}

.sign-up-btn:hover {
  background-color: #ea5b0c;
  border-color: #ea5b0c;
}

.href-buttons-rounded a {
  margin-left: 20px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  color: grey;
  border-color: black;
  display: inline-flex;
  border-radius: 50%;
  text-decoration: none;
  border: grey;
}

.href-buttons-rounded a:hover {
  box-shadow: 0px 0px 10px lightgrey;
}

.login-with-btn-hrefs p {
  text-align: center;
}
</style>

