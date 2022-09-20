<template>
  <div>
    <HeaderForHall />
    <AddItinerary />
  </div>
</template>

<script>
import AddItinerary from "../components/HallPage/Itineraries/Add-Itinerary.vue";
import HeaderForHall from "../components/HeaderForHall.vue";

export default {
  name: "HomeView",
  components: {
    AddItinerary,
    HeaderForHall,
  },
};
</script>


<style>
</style>