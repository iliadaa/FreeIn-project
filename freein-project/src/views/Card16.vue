<template>
   <div>
    <Header />
    <div class="container">
      <card16 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card16 from '../components/CardProfile/card16.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card16',
 components:{card16, Header, Footer}
})
</script>
