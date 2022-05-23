<template>
  <div class="home">
    

 <FirstSliceFP/>
 <SecondSliceFP/>
 <Login/>
    <Footer/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import FirstSliceFP from '@/components/FirstSliceFP.vue'
import Footer from '@/components/Footer.vue'
import SecondSliceFP from '@/components/SecondSliceFP.vue'
import Login from "@/components/Login.vue";


export default {
  name: 'HomeView',
  components: {
    FirstSliceFP,
    Footer,
    SecondSliceFP,
    Login
   
    
  }
}
</script>
