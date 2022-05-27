<template>
   <div>
    <Header />
    <div class="container">
      <card6 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card6 from '../components/CardProfile/card6.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card6',
 components:{card6, Header, Footer}
})
</script>
