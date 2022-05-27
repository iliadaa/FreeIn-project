<template>
<div class="container">
    <Header/>
    <CardProfileStart/>
    <card0/> 
    <card1/>
    <card2/>
    <card3/>
    <card4/>
    <card5/>
    <card6/>
    <card7/>
    <card8/>
    <card9/>
    <card10/>
    <card11/>
    <card12/>
    <card13/>

</div>
</template>


<script>
import card0 from "../components/CardProfile/card0.vue"
import CardProfileStart from "../components/CardProfile/CardProfile-Start.vue" 
import card1 from '../components/CardProfile/card1.vue'
import card2 from '../components/CardProfile/card2.vue'
import card3 from '../components/CardProfile/card3.vue'
import Header from '../components/Header.vue'
import card4 from '../components/CardProfile/card4.vue'
import card5 from '../components/CardProfile/card5.vue'
import card6 from '../components/CardProfile/card6.vue'
import card7 from '../components/CardProfile/card7.vue'
import card8 from '../components/CardProfile/card8.vue'
import card9 from '../components/CardProfile/card9.vue'
import card10 from '../components/CardProfile/card10.vue'
import card11 from '../components/CardProfile/card11.vue'
import card12 from '../components/CardProfile/card12.vue'
import card13 from '../components/CardProfile/card13.vue'

export default{
    name: "HomeView",
    components: {
    CardProfileStart,
    card0,
    card1,
    card2,
    card3,
    Header,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13
}
}
</script>