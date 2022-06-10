<template>
  <div>
    <Header />
    <div class="container"><cardprofile /></div>
    <Footer />
  </div>
</template>

<script>
import cardprofile from "../components/CardProfile/CardProfile-Start.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Cardprofile",
  components: { cardprofile, Header, Footer },
};
</script>
