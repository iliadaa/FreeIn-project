<template>
 <slick ref="slick" :options="slickOptions">
  
</slick>
</template>

<script>
import Slick from 'vue-slick';

export default({
   components: { Slick },
   data() {
     return{
      slickOptions:{
        slidesToShow:3,
        infinite:true,
        adaptiveHeight: false,
        arrows:true,
        dots:true,
        draggable:true,
        edgeFriction:0.30,
        swipe:true
      }
    }
 },
 methods:{
  next() { this.$refs.slick.next()},
  prev() {this.$refs.slick.prev()},
  reInit() {this.$refs.slick.reSlick()}}
 })
</script>
<style></style>
