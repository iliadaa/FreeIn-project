<template>
  <div>
    <Header />

    <BusinessCard2 />

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BusinessCard2 from "../components/Users Cards/BusinessCard2.vue";
export default {
  name: "BusinessPage",
  components: {
    Header,

    BusinessCard2,

    Footer,
  },
};
</script>
<style></style>
