<template>
  <div>
      <Header/>
    <AddItinerary/>
  </div>
</template>

<script>
import AddItinerary from '../components/HallPage/Itineraries/Add-Itinerary.vue';
import Header from '../components/Header.vue'

export default {
  name: "HomeView",
  components: { 
    AddItinerary,
    Header,
  },
};
</script>


<style>
</style>