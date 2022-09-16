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
              type="submit"
              @click="correctData(user.email, user)"
              >SIGN UP</b-button
            >
          </b-form>
        </div>
        <div class="login-with-btn-hrefs">
          <p>- or -</p>
          <div class="href-buttons-rounded">
            <a class="fab fa-facebook-f" href="#" style="margin-left: 5px"></a>
            <a class="fab fa-twitter" href="#"></a>
            <a class="fab fa-google-plus-g" href="#"></a>
            <a class="fab fa-microsoft" href="#"></a>
            <a class="fab fa-linkedin" href="#" style="margin-right: 5px"></a>
          </div>
        </div>
      </div>

      <div class="card card-r">
        <h2>Hello, Friend!<b-icon class="bar-chart-line-fill"></b-icon></h2>
        <p>Click the button below to log in into your account!</p>
        <b-button class="log-in" @click="changePage(true)">LOG IN</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import UsersJson from "/Users.json";

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
        roles: ["private"],
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

    correctData(email, user) {
      //console.log(email + password);
      if (email.includes("@gmail" || "@outlook" || "@yahoo")) {
        this.changePage(true);
        this.validation(user);
      } else {
        alert("L'email deve contenere una @ seguita da: gmail, outlook..");
        return false;
      }
    },
    onSubmit(event) {
      event.preventDefault();
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

    //validation is coming from the vuex store and it's used to register a new user

    validation(user) {
      this.$store.commit("isValidate", user);
    },

    unregister(registrations) {
      const user = this.$store.registrations.find((user) => {
        return user.email == registrations.email;
      });
      user.registered = false;
      this.$store.restrations.splice(
        this.$store.registrations.indexOf(registrations),
        1
      );
    },
  },

  computed: {
    registrations() {
      return this.$store.state.registrations;
    },
    inSession() {
      return this.$store.state.inSession;
    },
    total() {
      return this.$store.state.registrations.length;
    },
  },
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

.card-group {
  align-content: center;
  justify-content: center;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  width: 80%;
  height: 100%;
  border-radius: 20px;
}
.card {
  height: 600px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}
.card-b h2 {
  color: gray;
}
.card-r {
  background-color: #ea5b0c;
  justify-content: center;
  align-items: center;
}
.card-r h2 {
  color: white;
  margin-bottom: -5px;
  margin-left: 25px;
}
.card-r p {
  color: white;
  font-size: 20px;
  margin-bottom: 25px;
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
.sign-up-btn {
  margin-top: 20px;
  margin-left: 128px;
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

@media (max-width: 575.98px) {
  .container {
    margin-top: 20px;
    margin-bottom: 50px;
  }

  .card-group {
    box-shadow: none;
  }
  .card {
    box-shadow: 5px 5px 20px;
    min-height: 250px;
    height: auto;
  }
  .card-b h2 {
    color: gray;
    font-size: 20px;
    padding-top: 20px;
  }
  .card-r h2 {
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .card-r p {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
  .log-in {
    font-size: 14px;
  }
  .card-login {
    width: 90%;
  }
  .email {
    margin-left: 12px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 16px;
    padding: 10px;
  }
  .password {
    margin-left: 12px;
    font-size: 16px;
    padding: 10px;
  }
  .name {
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 12px;
    font-size: 16px;
    padding: 10px;
  }
  .surname {
    margin-left: 12px;
    font-size: 16px;
    padding: 10px;
  }
  .sign-up-btn {
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
  }
  .href-buttons-rounded a {
    margin-left: 10px;
    margin-bottom: 20px;
    width: 35px;
    height: 35px;
  }
}
</style>
