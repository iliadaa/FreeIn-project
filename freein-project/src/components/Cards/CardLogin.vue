<template>
  <div class="card-group card-absolute">
    <div class="card card-b">
      <h2>Returning User</h2>
      <div class="card-login">
        <!-- vedi vecchio codice login ed usalo qui -->
        <b-form @submit="onSubmit" v-if="show">
          <b-input-group>
            <input class="email" placeholder="Email" v-model="form.email" />
          </b-input-group>
          <b-input-group>
            <input
              class="password"
              placeholder="Password"
              v-model="form.password"
              type="password"
              required=""
              id="myInput"
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
          <!-- questo p class deve essere un a con style: text-decoration: none -->
          <p class="forgot-password">Forgot password?</p>
          <b-button
            class="login-btn"
            @click="(form.change = !form.change), (goInTest = !goInTest)"
            type="submit"
            >LOG IN</b-button
          >
        </b-form>
      </div>
      <div class="login-with-btn-hrefs">
        <p>- or -</p>
        <div class="href-buttons-rounded">
          <a class="fab fa-facebook-f" href="#"></a>
          <a class="fab fa-twitter"></a>
          <a class="fab fa-google-plus-g"></a>
          <a class="fab fa-microsoft"></a>
          <a class="fab fa-linkedin" style="margin-right: 20px"></a>
        </div>
      </div>
    </div>

    <div class="card card-r">
      <h2>Hello, Friend!<b-icon class="bar-chart-line-fill"></b-icon></h2>
      <p>If you are not registered click the</p>
      <p style="margin-bottom: 20px">button below!!</p>
      <b-button class="sign-up" @click="changePage(true)">SIGN UP</b-button>
    </div>
  </div>
</template>

<script>
import CardRegister from "../Cards/CardRegister.vue";
export default {
  components: {
    register: CardRegister,
  },

  data() {
    return {
      component: "register",
      form: {
        email: "",
        password: "",
        change: false,
      },
      hide: false,
      show: true,
      goInTest: false,
    };
  },
  methods: {
    changePage(change) {
      if (change == true) {
        this.$router.push({
          name: "SignUp",
        });
      }
    },

    goIntoTest(goInTest) {
      if (goInTest == true) {
        this.$router.push({
          name: "Test",
        });
      }
    },

    correctData(email, password, change, goInTest) {
      console.log(email + password);
      if (email == "ciccio@gmail.com" && password == "01234") {
        //change == true;
        goInTest == true;
        alert("Login avvenuto con successo! + ");
        this.goIntoTest(goInTest);
      } else if (email == "CICCIO.@GMAIL.COM" && password == " 01234 ") {
        alert("Login avvenuto con successo!");
        //change == true;
        goInTest == true;
        this.changePage(change);
      } else {
        console.log(email + "Password:" + password);
        alert("La password e/o la email è errata!");
        change == false;
      }
    },
    onSubmit(event) {
      event.preventDefault();
      this.correctData(
        this.form.email,
        this.form.password,
        this.form.change,
        this.goInTest
      );
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    showPass(hide) {
      var x = document.getElementById("myInput");
      if (x.type === "password") {
        x.type = "text";
        this.hide = true;
      } else {
        x.type = "password";
        this.hide = false;
      }
    },
  },
};
</script>

<style scoped>
.container1 {
  margin-top: 165px;
  margin-left: 455px;
  align-content: center;
  justify-content: center;
  display: flex;
  width: 288%;
  opacity: 100%;
}

.card {
  height: 600px;
  width: 0%;
  background-color: white;
  justify-content: center;
  align-items: center;
}

.card-r {
  background-color: orange;
  justify-content: center;
  align-items: center;
}

.card-group {
  z-index: 1;
  align-content: center;
  justify-content: center;
  display: flex;
  width: 70%;
  height: 100%;
  box-shadow: 0px 0px 0px transparent;
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

.sign-up {
  border-radius: 20px;
  border-color: white;
  background-color: orange;
  color: white;
}

.sign-up:hover {
  border-color: white;
  background-color: orange;
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

.forgot-password {
  margin-left: 100px;
  margin-top: 50px;
  font-size: 20px;
}

.login-btn {
  margin-top: 20px;
  margin-left: 128px;
  border-radius: 30px;
  font-size: 120%;
  border-color: white;
  background-color: orange;
  color: white;
  align-items: center;
}

.login-btn:hover {
  background-color: orange;
  border-color: orange;
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

<!--    
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-input-group class="userName" prepend="@">
        <b-form-input
          style="color: black"
          placeholder="Username"
          v-model="form.email"
        ></b-form-input>
      </b-input-group>

      <b-input-group class="password" prepend="@">
        <b-form-input
          style="color: black"
          placeholder="Password"
          v-model="form.password"
        >
        </b-form-input>

        <b-button
          @click="form.change = !form.change"
          type="submit"
          style="background-color: darkorange"
          >Submit</b-button
        >
        <b-button type="reset" variant="dark">Reset</b-button>
      </b-input-group>
    </b-form>

    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        change: false,
      },
      show: true,
    };
  },
  methods: {
    changePage(change) {
      if (change == true) {
        this.$router.push({
          name: "AboutPage",
        });
      }
    },

    correctData(email, password, change) {
      console.log(email + password);
      if (email == "mailto:ciccio@gmail.com" && password == "01234") {
        alert("Bravooo");
        change == true;
        this.changePage(change);
      } else if (email == "mailto:ciccio.@gmail.com" && password == " 01234 ") {
        alert("Bravooo");
        change == true;
        this.changePage(change);
      } else {
        alert("Ritenta");
      }
    },
    onSubmit(event) {
      event.preventDefault();
      this.correctData(this.form.email, this.form.password, this.form.change);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>



<style scoped>
.userName {
  width: 750px;
  margin-top: 60px;
  margin-left: 180px;
}

.password {
  max-width: 750px;
  margin-top: 60px;
  margin-left: 180px;
}
</style>
-->
