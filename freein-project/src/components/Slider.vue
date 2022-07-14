<template>
  <VueSlickCarousel v-bind="settings">
    <div v-for="(item, index) in itinerariestore" :key="index">
      <img :src="item.stages[index].stage.img" />
    </div>
  </VueSlickCarousel>
</template>

<!-- <div v-for="(item, i) in itinerariestore" :key="i">
      <div v-for="(stages, index) in item.stages" :key="index">
        <img :src="stages.stage.img" />
      </div>
    </div>
-->

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


<style>
.slick-slide {
  height: 0px !important;
}
.slick-slide.slick-active {
  height: 100% !important;
}
</style>
