<template>
  <div class="home">
    <FirstPageLayout/>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstPageLayout from '@/components/FirstPageLayout.vue'

export default {
  name: 'HomeView',
  components: {
    FirstPageLayout
  }
}
</script>
