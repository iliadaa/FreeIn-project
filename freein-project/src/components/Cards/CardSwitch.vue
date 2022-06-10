<template>
<!--Added-->
  <!--<div class="container">
    <component :is="component"></component>
    <div class="card-group card-absolute" v-on:click="component = 'login'">
      <div class="card card-a">
        <div class="illustrations1">
          <img src="@/assets/dots-orange.png" alt="">
        </div>
          <p>ispira</p>
      </div>

      <div class="card card-b">
        <div class="illustrations2">
          <img src="@/assets/dots-blue.png" alt="">
        </div>
        <p>lasciati</p> 
        <p>ispirare</p>
      </div>
    </div>
  </div>-->


  <div class="container">
    <component :is="component"></component>
    <div class="card-group card-absolute" v-on:click="component = 'login'">
      <div class="card card-b">
        <p>ispira</p>
      </div>

      <div class="card card-r">
        <p>lasciati</p>
        <p style="margin-left: 14px; margin-bottom: 15px">ispirare</p>
      </div>
    </div>
  </div>
</template>

<script>
import CardLogin from "../Cards/CardLogin.vue";
export default {
  components: {
    login: CardLogin,
  },
};
</script>

<style scoped>
/*Added*/
/*.container {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 40px;
  margin-bottom: 100px;
}
.card-group {
  justify-content: center;
  align-content: center;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  width: 80%;
  height: 100%;
  border-radius: 20px;
}
.card {
  justify-content: center;
  text-align: center;
  height: 600px;
  border-radius: 20px;  
}
.card-a{
  background-color: #442A63;
}
.illustrations1 {
  margin-right: -10px;
  margin-bottom: -10px;
}
.illustrations2 {
  margin-right: -25px;
  margin-bottom: 10px;
}
.card-a p {
  color: #EB6349;
  font-size: 50px;
  font-weight: bold;
}
.card-b {
  background-color: #EB6349;
}
.card-b p {
  color: #442A63;
  font-size: 50px;
  font-weight: bold;
  line-height: 30px;
}*/


.card-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container {
  margin-top: 100px;
  align-content: center;
  justify-content: center;
  display: flex;
  position: relative;
  height: 600px;
  margin-bottom: 100px;
}

.card {
  height: 600px;
  background-color: #442a63;
  justify-content: center;
  align-items: center;
}

.card-r {
  background-color: #eb6349;
}

.card-b p {
  color: #eb6349;
  font-size: 100px;
}

.card-r p {
  color: #442a63;
  font-size: 100px;
  margin-bottom: -70px;
}

.card-group {
  align-content: center;
  justify-content: center;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  width: 70%;
  height: 100%;
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
      sho\w: true,
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
      if (email == "ciccio@gmail.com" && password == "01234") {
        alert("Bravooo");
        change == true;
        this.changePage(change);
      } else if (email == "ciccio.@gmail.com" && password == " 01234 ") {
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

<script>
import CardLogin from "../Cards/CardLogin.vue";

export default {
  components: {
    login: CardLogin,
  },
  data() {
    return {
      component: "layout",
    };
  },
};
</script>

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
      sho\w: true,
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
      if (email == "ciccio@gmail.com" && password == "01234") {
        alert("Bravooo");
        change == true;
        this.changePage(change);
      } else if (email == "ciccio.@gmail.com" && password == " 01234 ") {
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
