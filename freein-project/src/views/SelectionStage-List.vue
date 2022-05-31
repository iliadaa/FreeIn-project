<template>
  <div>
      <Header/>
    <Travel1/>
  </div>
</template>

<script>
import Travel1 from '../components/HallPage/Itineraries/travel1.vue'
import Header from '../components/Header.vue'

export default {
  name: "HomeView",
  components: { 
    Header,
    Travel1
  },
};
</script>


<style>
</style>