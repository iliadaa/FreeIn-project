<template>
  <div class="home">
    <FirstPageLayout/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstPageLayout from '@/components/FirstPageLayout.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    FirstPageLayout,
    Footer
  }
}
</script>
