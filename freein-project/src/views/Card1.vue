<template>
  <div>
    <Header />
    <div class="container"><card1 /></div>
    <Footer />
  </div>
</template>

<script>
import card1 from "../components/CardProfile/card1.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Card1",
  components: { card1, Header, Footer },
};
</script>
