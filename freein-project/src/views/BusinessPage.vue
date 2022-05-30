<template>
  <div>
    <Header />
    <UserCard />
    <BusinessCard1 />
    <BusinessCard2 />
    <BusinessCard3 />
    <BusinessCard4 />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import UserCard from "../components/Users Cards/UserCard.vue";
import BusinessCard1 from "../components/Users Cards/BusinessCard1.vue";
import BusinessCard2 from "../components/Users Cards/BusinessCard2.vue";
import BusinessCard3 from "../components/Users Cards/BusinessCard3.vue";
import BusinessCard4 from "../components/Users Cards/BusinessCard4.vue";
export default {
  name: "BusinessPage",
  components: {
    Header,
    UserCard,
    BusinessCard1,
    BusinessCard2,
    BusinessCard3,
    BusinessCard4,
    Footer,
  },
};
</script>
<style></style>
