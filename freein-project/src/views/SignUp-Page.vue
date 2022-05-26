<template>
  <div>
    <Header/>
    <CardRegister/>
    <Footer/>  
    <br> 
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/Footer.vue";
import CardRegister from '../components/Cards/CardRegister.vue';

export default {
  name: "HomeView",
  components: { 
    Header,
    Slider,
    Footer,
    CardRegister,
  },
};
</script>


<style>
</style>