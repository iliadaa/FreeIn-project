<template>
  <div>
    <HeaderForHall />

    <BusinessCard4 />

    <Footer />
  </div>
</template>

<script>
import HeaderForHall from "../components/HeaderForHall.vue";
import Footer from "../components/Footer.vue";
import BusinessCard4 from "../components/Users Cards/BusinessCard4.vue";
export default {
  name: "BusinessPage",
  components: {
    HeaderForHall,

    BusinessCard4,

    Footer,
  },
};
</script>
<style></style>
