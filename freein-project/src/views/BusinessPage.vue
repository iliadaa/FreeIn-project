<template>
  <div>
    <HeaderForHall />
    <UserCard />

    <Footer />
  </div>
</template>

<script>
import HeaderForHall from "../components/HeaderForHall.vue";
import Footer from "../components/Footer.vue";
import UserCard from "../components/Users Cards/UserCard.vue";

export default {
  name: "BusinessPage",
  components: {
    HeaderForHall,
    UserCard,

    Footer,
  },
};
</script>
<style></style>
