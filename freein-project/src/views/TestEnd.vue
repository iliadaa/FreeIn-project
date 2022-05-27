<template>
  <div >
    <Header />
   <div class="container"><cardprofileend /></div> 
    <Footer />
  </div>
</template>

<script>
import cardprofileend from "../components/CardProfile/CardProfile-End.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "CardprofileEnd",
  components: { cardprofileend, Header, Footer },
};
</script>
