<template>
   <div>
    <Header />
    <div class="container">
      <card12 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card12 from '../components/CardProfile/card12.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card12',
 components:{card12, Header, Footer}
})
</script>
