<template>
  <div>
    <HeaderForHall />
    <Travel1 />
  </div>
</template>

<script>
import Travel1 from "../components/HallPage/Itineraries/travel1.vue";
import HeaderForHall from "../components/HeaderForHall.vue";

export default {
  name: "HomeView",
  components: {
    HeaderForHall,
    Travel1,
  },
};
</script>


<style>
</style>