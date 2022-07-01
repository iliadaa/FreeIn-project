<template>
  <div class="container">
    <component :is="component"></component>
    <div class="card-group card-absolute" v-on:click="component = 'login'">
      <div class="card card-b">
        <div class="illustrations1">
          <img src="@/assets/dots-orange.png" alt="">
        </div>
        <p>ispira</p>
      </div>

      <div class="card card-r">
        <div class="illustrations2">
          <img src="@/assets/dots-blue.png" alt="">
        </div>
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
.container {
  margin-top: 40px;
  align-content: center;
  justify-content: center;
  display: flex;
  position: relative;
  height: 600px;
  margin-bottom: 100px;
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
  background-color: #442a63;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
}
.card-b p {
  color: #eb6349;
  font-size: 50px;
  font-weight: bold;
  line-height: 30px;
}
.card-r {
  background-color: #eb6349;
}
.card-r p {
  color: #442a63;
  font-size: 50px;
  font-weight: bold;
  line-height: 30px;
}
.illustrations1 {
  margin-right: -10px;
  margin-bottom: 8px;
}
.illustrations2 {
  margin-right: -25px;
  margin-bottom: 10px;
}
.card-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
.card-b p {
  font-size: 30px;
  line-height: 20px;
}
.card-r {
  background-color: #eb6349;
}
.card-r p {
  font-size: 30px;
  line-height: 20px;
}
.illustrations1 {
  margin-left: 30px;
}
.illustrations2 {
  margin-right: 20px;
}
}
</style>


<script>
import CardLogin from "../Cards/CardLogin.vue";

export default {
  components: {
    login: CardLogin,
  },
  data() {
    return {
      component: "",
    };
  },
};
</script>

