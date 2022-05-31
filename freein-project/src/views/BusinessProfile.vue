<template>
  <div>
    <Header />
    <Businessprofile />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Businessprofile from "../components/Users Cards/Business-profile.vue";

export default {
  name: "BusinessProfile",
  components: {
    Header,
    Businessprofile,
  },
};
</script>
<style></style>
