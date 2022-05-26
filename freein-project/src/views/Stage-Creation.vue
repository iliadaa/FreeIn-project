<template>
  <div>
      <Header/>
    <AddStage/>  
  </div>
</template>

<script>
import AddStage from '../components/HallPage/Stages/Add-Stage.vue';
import Header from '../components/Header.vue'

export default {
  name: "HomeView",
  components: { 
    AddStage,
    Header
  },
};
</script>


<style>
</style>