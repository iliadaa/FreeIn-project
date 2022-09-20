<template>
  <div>
    <HeaderForHall />

    <BusinessCard2 />

    <Footer />
  </div>
</template>

<script>
import HeaderForHall from "../components/HeaderForHall.vue";
import Footer from "../components/Footer.vue";
import BusinessCard2 from "../components/Users Cards/BusinessCard2.vue";
export default {
  name: "BusinessPage",
  components: {
    HeaderForHall,

    BusinessCard2,

    Footer,
  },
};
</script>
<style></style>
