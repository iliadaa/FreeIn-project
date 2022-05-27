<template>
   <div>
    <Header />
    <div class="container">
      <card3 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card3 from '../components/CardProfile/card3.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card3',
 components:{card3, Header, Footer}
})
</script>
