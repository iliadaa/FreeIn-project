<template>
<div class="container">
    <CardProfileStart/>
   <card0/> 

</div>
</template>


<script>
import card0 from "../components/CardProfile/card0.vue"
import CardProfileStart from "../components/CardProfile/CardProfile-Start.vue" 

export default{
    name: "HomeView",
    components: {
        card0,
        CardProfileStart,
    }
}
</script>