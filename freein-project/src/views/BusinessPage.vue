<template>
  <div>
    <Header />
    <UserCard />

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import UserCard from "../components/Users Cards/UserCard.vue";

export default {
  name: "BusinessPage",
  components: {
    Header,
    UserCard,

    Footer,
  },
};
</script>
<style></style>
