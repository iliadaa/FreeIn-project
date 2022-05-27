<template>
   <div>
    <Header />
    <div class="container">
      <card8 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card8 from '../components/CardProfile/card8.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card8',
 components:{card8, Header, Footer}
})
</script>
