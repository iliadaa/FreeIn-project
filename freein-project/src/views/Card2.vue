<template>
  <div>
    <Header />
    <div class="container">
      <card2 />
    </div>
    <Footer />
  </div>
</template>

<script>
import card2 from "../components/CardProfile/card2.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Card2",
  components: { card2, Header, Footer },
};
</script>
