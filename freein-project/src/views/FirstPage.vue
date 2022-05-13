<template>
  <div class="home">
    

 <FirstSliceFP/>
 <SecondSliceFP/>
    <Footer/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import FirstSliceFP from '@/components/FirstSliceFP.vue'
import Footer from '@/components/Footer.vue'
import SecondSliceFP from '@/components/SecondSliceFP.vue'


export default {
  name: 'HomeView',
  components: {
    FirstSliceFP,
    Footer,
    SecondSliceFP
    
  }
}
</script>
