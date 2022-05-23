<template>
<div class="container">
  <div class="column">
      <b-card header="Default" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
  </div>
  </div>



</template>

<style scoped>

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

