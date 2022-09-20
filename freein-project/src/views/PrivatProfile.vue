<template>
  <div>
    <HeaderForHall />
    <Privatprofile />
  </div>
</template>

<script>
import HeaderForHall from "../components/HeaderForHall.vue";
import Privatprofile from "../components/Users Cards/Privatprofile.vue";
export default {
  name: "PrivatProfile",
  components: {
    Privatprofile,
    HeaderForHall,
  },
};
</script>

<style></style>
