<template>
  <div>
    <HeaderForHall />

    <BusinessCard3 />

    <Footer />
  </div>
</template>

<script>
import HeaderForHall from "../components/HeaderForHall.vue";
import Footer from "../components/Footer.vue";
import BusinessCard3 from "../components/Users Cards/BusinessCard3.vue";
export default {
  name: "BusinessPage",
  components: {
    HeaderForHall,

    BusinessCard3,

    Footer,
  },
};
</script>
<style></style>
