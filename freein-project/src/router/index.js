import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '../views/FirstPage.vue'
import AboutView from '../views/AboutView.vue'
import Test from '../views/Test.vue'
import BusinessPage from "../views/BusinessPage.vue"
import Card0 from '../views/Card0.vue'
import Card1 from '../views/Card1.vue'
import Card2 from '../views/Card2.vue'
import Card3 from '../views/Card3.vue'
import Cardprofile from '../views/Cardprofile.vue'


Vue.use(VueRouter)

const routes = [
  {
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
    path:'/cardprofile',
    name:' Cardprofile ',
    component: Cardprofile 
  }
 
 
]


const router = new VueRouter({
  routes
})

export default router
