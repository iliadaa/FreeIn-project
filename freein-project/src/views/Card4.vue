<template>
   <div>
    <Header />
    <div class="container">
      <card4 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card4 from '../components/CardProfile/card4.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card4',
 components:{card4, Header, Footer}
})
</script>
