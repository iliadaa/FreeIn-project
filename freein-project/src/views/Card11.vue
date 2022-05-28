<template>
   <div>
    <Header />
    <div class="container">
      <card11 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card11 from '../components/CardProfile/card11.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card11',
 components:{card11, Header, Footer}
})
</script>
