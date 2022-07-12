<template>
  <VueSlickCarousel v-bind="settings">
    <img :src="$store.state.itinerariestore[0].img" />
    <img :src="$store.state.stagestore[0].img" />
    <img :src="$store.state.stagestore[0].img" />
  </VueSlickCarousel>
</template>

<style>
.slick-slide {
  height: 0px !important;
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
  computed: {
    stagestore() {
      return this.$store.state.stagestore;
    },
    itinerariestore() {
      return this.$store.state.itinerariestore;
    },
  },
};
</script>
