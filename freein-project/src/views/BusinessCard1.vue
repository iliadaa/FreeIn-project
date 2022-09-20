<template>
  <div>
    <HeaderForHall />
    <BusinessCard1 />
    <Footer />
  </div>
</template>

<script>
import HeaderForHall from "../components/HeaderForHall.vue";
import Footer from "../components/Footer.vue";
import BusinessCard1 from "../components/Users Cards/BusinessCard1.vue";
export default {
  name: "BusinessPage",
  components: {
    HeaderForHall,

    BusinessCard1,

    Footer,
  },
};
</script>
<style></style>
