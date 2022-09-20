<template>
  <div>
    <HeaderForHall />
    <AddStage />
  </div>
</template>

<script>
import AddStage from "../components/HallPage/Stages/Add-Stage.vue";
import HeaderForHall from "../components/HeaderForHall.vue";

export default {
  name: "HomeView",
  components: {
    AddStage,
    HeaderForHall,
  },
};
</script>


<style>
</style>