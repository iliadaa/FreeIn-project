<template>
   <div>
    <Header />
    <div class="container">
      <card13 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card13 from '../components/CardProfile/card13.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card13',
 components:{card13, Header, Footer}
})
</script>
