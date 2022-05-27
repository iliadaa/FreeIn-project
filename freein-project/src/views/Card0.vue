<template>
  <div>
    <Header />
    <div class="container">
      <card0 />
    </div>
    <Footer />
  </div>
</template>

<script>
import card0 from "../components/CardProfile/card0.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Card0",
  components: { card0, Header, Footer },
};
</script>
