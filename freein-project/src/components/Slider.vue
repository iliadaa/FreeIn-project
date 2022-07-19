<template>
  <div>
    <div>
      <VueSlickCarousel v-bind="settings">
        <div v-for="(itineraries, id) in itinerariestore" :key="id">
          <img :src="itineraries.img" />
        </div>
        <div v-for="(stagesInItinerary, id) in this.itinerariestore[0].stages" :key="id">
          <img :src="stagesInItinerary.stage.img" />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

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
.slick-slide img {
  width: inherit;
}
</style>