<template>
  <div>
    <Header />

    <BusinessCard3 />

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BusinessCard3 from "../components/Users Cards/BusinessCard3.vue";
export default {
  name: "BusinessPage",
  components: {
    Header,

    BusinessCard3,

    Footer,
  },
};
</script>
<style></style>
