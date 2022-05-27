<template>
   <div>
    <Header />
    <div class="container">
      <card9 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card9 from '../components/CardProfile/card9.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card9',
 components:{card9, Header, Footer}
})
</script>
