<template>
  <div>
    <Header />

    <BusinessCard4 />

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BusinessCard4 from "../components/Users Cards/BusinessCard4.vue";
export default {
  name: "BusinessPage",
  components: {
    Header,

    BusinessCard4,

    Footer,
  },
};
</script>
<style></style>
