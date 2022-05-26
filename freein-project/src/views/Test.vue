<template>
<div class="container">
    <CardProfileStart/>
    <card0/> 
    <card1/>
    <card2/>

</div>
</template>


<script>
import card0 from "../components/CardProfile/card0.vue"
import CardProfileStart from "../components/CardProfile/CardProfile-Start.vue" 
import card1 from '../components/CardProfile/card1.vue'
import card2 from '../components/CardProfile/card2.vue'

export default{
    name: "HomeView",
    components: {
        CardProfileStart,
        card0,
        card1,
        card2,
    }
}
</script>