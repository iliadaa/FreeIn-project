<template>
  <VueSlickCarousel v-bind="settings">
    <img src="@/assets/pasta.jpg" />
    <img src="@/assets/olive.jpg" />
    <img src="@/assets/focaccia.jpg" />
  </VueSlickCarousel>
</template>

<style>
.slick-slide {
  height: 0px!important;
 }
.slick-slide.slick-active {
  height: 100% !important;  
 }
</style>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Slider",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        cssEase: "linear",
      },
    };
  },
};
</script>
