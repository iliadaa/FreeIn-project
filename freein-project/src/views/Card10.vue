<template>
   <div>
    <Header />
    <div class="container">
      <card10 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card10 from '../components/CardProfile/card10.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card10',
 components:{card10, Header, Footer}
})
</script>
