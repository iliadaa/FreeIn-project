import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '../views/FirstPage.vue'
import AboutView from '../views/AboutView.vue'
import Test from '../views/Test.vue'
import TestEnd from '../views/TestEnd.vue'
import BusinessPage from "../views/BusinessPage.vue"
import Card0 from '../views/Card0.vue'
import Card1 from '../views/Card1.vue'
import Card2 from '../views/Card2.vue'
import Card3 from '../views/Card3.vue'
import Cardprofile from '../views/Cardprofile.vue'
import SignUp from '../views/SignUp-Page.vue'
import StageCreation from '../views/Stage-Creation.vue'
import Card4 from '../views/Card4.vue'
import Card5 from '../views/Card5.vue'
import Card6 from '../views/Card6.vue'
import Card7 from '../views/Card7.vue'
import Card8 from '../views/Card8.vue'
import Card9 from '../views/Card9.vue'
import Card10 from '../views/Card10.vue'
import Card11 from '../views/Card11.vue'
import Card12 from '../views/Card12.vue'
import Card13 from '../views/Card13.vue'
import Card14 from '../views/Card14.vue'
import Card15 from '../views/Card15.vue'
import Card16 from '../views/Card16.vue'
import BusinessCard2 from "../views/BusinessCard2.vue"
import BusinessCard1 from "../views/BusinessCard1.vue"
import BusinessCard3 from "../views/BusinessCard3.vue"
import BusinessCard4 from "../views/BusinessCard4.vue"


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'FirstPage',
        component: FirstPage
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    },
    {
        path: '/signUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/testend',
        name: 'TestEnd',
        component: TestEnd
    },
    {
        path: '/businesspage',
        name: 'BusinessPage',
        component: BusinessPage
    },
    {
        path: '/card0',
        name: 'Card0',
        component: Card0
    },
    {
        path: '/card1',
        name: 'Card1',
        component: Card1
    },
    {
        path: '/card2',
        name: 'Card2',
        component: Card2
    },
    {
        path: '/card3',
        name: 'Card3',
        component: Card3
    },

    {
        path: '/cardProfile',
        name: ' Cardprofile ',
        component: Cardprofile
    },
    {
        path: '/stagecreation',
        name: ' StageCreation ',
        component: StageCreation
    },
    {
        path: '/card4',
        name: 'Card4',
        component: Card4
    },
    {
        path: '/card5',
        name: 'Card5',
        component: Card5
    },
    {
        path: '/card6',
        name: 'Card6',
        component: Card6
    },
    {
        path: '/card7',
        name: 'Card7',
        component: Card7
    },
    {
        path: '/card8',
        name: 'Card8',
        component: Card8
    },
    {
        path: '/card9',
        name: 'Card9',
        component: Card9
    },
    {
        path: '/card10',
        name: 'Card10',
        component: Card10
    },
    {
        path: '/card11',
        name: 'Card11',
        component: Card11
    },
    {
        path: '/card12',
        name: 'Card12',
        component: Card12
    },
    {
        path: '/card13',
        name: 'Card13',
        component: Card13
    },
    {
        path: '/card14',
        name: 'Card14',
        component: Card14
    },
    {
        path: '/card15',
        name: 'Card15',
        component: Card15
    },
    {
        path: '/card16',
        name: 'Card16',
        component: Card16
    },
    {
        path: '/businesscard2',
        name: 'BusinessCard2',
        component: BusinessCard2
    },
    {
        path: '/businesscard1',
        name: 'BusinessCard1',
        component: BusinessCard1
    },
    {
        path: '/businesscard3',
        name: 'BusinessCard3',
        component: BusinessCard3
    },
    {
        path: '/businesscard4',
        name: 'BusinessCard4',
        component: BusinessCard4
    },



]


const router = new VueRouter({
    routes
})

export default router