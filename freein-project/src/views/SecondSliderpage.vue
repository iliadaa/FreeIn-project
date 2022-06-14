<template>
  <div class="SecondSliderpage">
    <div class="container"><Header /></div>
    <div class="first-slider">
      <img src="../assets/eiffel.jpg" />
    </div>
    <Secondslider />
    <Thirdslider />
  </div>
</template>
<script>
import Secondslider from "@/components/Secondslider.vue";
import Thirdslider from "@/components/Thirdslider.vue";
import Header from "@/components/Header.vue";
export default {
  name: "SecondSliderpage",
  components: { Secondslider, Thirdslider, Header },
};
</script>

<style>
.SecondSliderpage .navbar {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 10%;
  padding-top: 0;
}

.first-slider img{
  width: 100%;
}





</style>
