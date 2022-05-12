<template>
  <div id="app">
<FirstPage/>
  <Footer/>

    <router-view/>
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import FirstPage from '@/components/FirstPageLayout.vue'

export default ({
  components: {
    Footer,
    FirstPage
    }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
