<template>
  <div class="home">
    <Header />
    <Slider />
    <CardSwitch/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/Footer.vue";
import CardSwitch from "../components/Cards/CardSwitch.vue";
//import CardLayout from "../components/Cards/CardLayout.vue";
//import CardLogin from "../components/Cards/CardLogin.vue";
//import CardRegister from "../components/Cards/CardRegister.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Slider,
    Footer,
    CardSwitch,

  },
};
</script>
<style>
  .home .navbar {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 10%;
    padding-top: 0;
  }
</style>
