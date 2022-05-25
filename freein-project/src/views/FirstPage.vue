<template>
  <div class="home">
    <Header />
    <Slider />
    <CardLayout />
    <CardLogin />
    <CardRegister />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/Footer.vue";
import CardLayout from "../components/Cards/CardLayout.vue";
import CardLogin from "../components/Cards/CardLogin.vue";
import CardRegister from "../components/Cards/CardRegister.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Slider,
    Footer,
    CardLayout,
    CardLogin,
    CardRegister,
  },
};
</script>
<style  scoped>

</style>
