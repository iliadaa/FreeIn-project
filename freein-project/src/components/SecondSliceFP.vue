<template>
  <div>
    <div
      class="bg-image"
      style="
        background-image: url('https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg');
        height: 110vh;
      "
    >
    <Card1/>
 
    </div>
  </div>
</template>
<script>
import Card1 from "@/components/Card1.vue";


export default {
  components: { Card1,},

  name: "HomeView",
  components: {
    Card1,

  },
};
</script>
