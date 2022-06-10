<template>
  <div class="container-business-user">
    <div class="card">
      <div class="card-header">Configura il tuo Business</div>
      <keep-alive> <component v-bind:is="comp"></component></keep-alive>
      <div
        v-on:click="available = !available"
        v-bind:class="{ available: available }"
        class="button-dots"
      >
        <div class="dots">
          <span class="dot-1"></span>
          <span class="dot-2"></span>
          <span class="dot-3"></span>
          <span class="dot-4"></span>
        </div>
        <b-button v-on:click="toggle" class="business-1-button">Avanti >></b-button>
      </div>
    </div>
    <div v-on:click="available = !available" v-bind:class="{ available: available }">
      <span>Hello</span>
    </div>
  </div>
</template>

<script>
import card1 from "./Body Html/card1.vue";
import card2test from "./Body Html/card2test.vue";
import card3test from "./Body Html/card3test.vue";
import card4test from "./Body Html/card4test.vue";

export default {
  name: "TestSwitch",
  components: { card1, card2test, card3test, card4test },
  data() {
    return {
      comp: "card1",
      available: true,
      nearby: false,
    };
  },
  methods: {
    toggle() {
      if (this.comp == "card1") {
        this.comp = card2test;
      } else if (this.comp == card2test) {
        this.comp = card3test;
      } else if (this.comp == card3test) {
        this.comp = card4test;
      }
    },
  },
};
</script>

<style scoped>
.container-business-user {
  display: flex;
  justify-content: center;
  font-family: "Roboto";
}
.card {
  width: 841px;
  margin-top: 100px;
  margin-bottom: 100px;
  height: 660px;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgbaa(0, 0, 0, 0.25);
}

.card-header {
  padding: 3%;
  background-color: #ea5b0c;
  color: white;
  font-size: x-large;
  text-align: center;
}
.card-header:first-child {
  border-radius: calc(2.25rem) calc(2.25rem) 0 0;
}
.business-1-button {
  background-color: #ea5b0c;
  border-color: transparent;
  font-style: normal;
  line-height: 28px;
}
.business-1-button:hover {
  background-color: #ea5b0c;
  border-color: transparent;
  outline-color: none;
}
.business-1-button:active {
  background-color: #ea5b0c;
  border-color: transparent;
}
.business-1-button:focus {
  outline-color: transparent;
  background-color: #ea5b0c;
  outline-style: none;
  border-color: none;
}
.business-1-button:focus {
  box-shadow: none;
  outline-style: none;
  border-color: transparent;
}
.button-dots {
  display: flex;
  justify-content: space-evenly;
}

.dot-1 {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: inline-block;
}
.dot-2 {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: inline-block;
  margin: 0 30px 0px 30px;
}
.dot-3 {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: inline-block;
}
.dot-4 {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: inline-block;
  margin: 0 30px;
}
.dots {
  padding-left: 25%;
}
.dots > span {
  background-color: #bbb;
}
.available span {
  background-color: #ea5b0c;
}
</style>
