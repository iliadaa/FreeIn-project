<template>
   <div>
    <Header />
    <div class="container">
      <card15 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card15 from '../components/CardProfile/card15.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card15',
 components:{card15, Header, Footer}
})
</script>
