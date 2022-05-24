<template>
<div class="container">
  <div class="card card-b">
    <div class="card card-shadow1">
      <p>ispira</p>
      </div>
    
    
  </div>

  <div class="card card-r">
    <div class="card card-shadow2">
    <p>lasciati</p>
    
    <p style="margin-left:14px; margin-bottom:15px">ispirare</p>
  </div>
  </div>
</div>
</template>

<script>

</script>

<style scoped>
.container{
margin-top: 100px;
align-content: center;
justify-content: center;
display: flex;

}

.card{
height: 600px;
width: 40%;
background-color:#442a63;
justify-content: center;
align-items: center;
}

.card-r{
  background-color: #eb6349;
}

.card-b p{
  color: #eb6349;
  font-size: 100px; 
}

.card-r p{
  color: #442a63;
  font-size: 100px;
  margin-bottom: -70px;
}

.card-shadow1{
  box-shadow: 2px 2px 30px  rgba(25, 25, 25, 0.668);
  width: 100%;
  height: 100%;
}

.card-shadow2{
  box-shadow: 2px 2px 30px  rgba(25, 25, 25, 0.668);
  width: 100%;
  height: 100%;
  background-color: transparent;
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

