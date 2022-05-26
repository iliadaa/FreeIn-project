<template>
<div class="container">
    <Header/>
    <CardProfileStart/>
    <card0/> 
    <card1/>
    <card2/>
    <card3/>

</div>
</template>


<script>
import card0 from "../components/CardProfile/card0.vue"
import CardProfileStart from "../components/CardProfile/CardProfile-Start.vue" 
import card1 from '../components/CardProfile/card1.vue'
import card2 from '../components/CardProfile/card2.vue'
import card3 from '../components/CardProfile/card3.vue'
import Header from '../components/Header.vue'
export default{
    name: "HomeView",
    components: {
        CardProfileStart,
        card0,
        card1,
        card2,
        card3,
        Header

    }
}
</script>