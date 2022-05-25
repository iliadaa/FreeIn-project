<template>
  <div class="home">
    
<Header/>
 <Slider/>
 
 <CardLayout/>
 <CardLogin/>
    <Footer/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '../components/FirstPage/Slider.vue'
import Footer from '../components/FirstPage/Footer.vue'
import CardLayout from '../components/FirstPage/Cards/CardLayout.vue'
import CardLogin from "../components/FirstPage/Cards/CardLogin.vue";
import Header from "../components/FirstPage/Header.vue"


export default {
  name: 'HomeView',
  components: {
    Slider,
    Footer,
    CardLayout,
    CardLogin,
    Header
     
    
  }
}
</script>
