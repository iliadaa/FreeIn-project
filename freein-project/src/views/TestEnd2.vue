<template>
  <div >
    <Header />
   <div class="container"><cardprofileend2 /></div> 
    <Footer />
  </div>
</template>

<script>
import cardprofileend2 from "../components/CardProfile/CardProfile-End2.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "CardprofileEnd2",
  components: { cardprofileend2, Header, Footer },
};
</script>
