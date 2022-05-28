<template>
   <div>
    <Header />
    <div class="container">
      <card14 />
    </div>
    <Footer />
  </div>
</template>

<script>

import card14 from '../components/CardProfile/card14.vue'
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default ({
 name:'Card14',
 components:{card14, Header, Footer}
})
</script>
