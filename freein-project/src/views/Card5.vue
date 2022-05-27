<template>
   <div>
    <Header />
    <div class="container">
      <card5 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card5 from '../components/CardProfile/card5.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card5',
 components:{card5, Header, Footer}
})
</script>
