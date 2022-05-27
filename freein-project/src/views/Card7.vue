<template>
   <div>
    <Header />
    <div class="container">
      <card7 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card7 from '../components/CardProfile/card7.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card7',
 components:{card7, Header, Footer}
})
</script>
