import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '../views/FirstPage.vue'
import AboutView from '../views/AboutView.vue'
import Test from '../views/Test.vue'
import BusinessPage from "../views/BusinessPage.vue"

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
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path:'/businesspage',
    name:'BusinessPage',
    component:BusinessPage
  }
]

const router = new VueRouter({
  routes
})

export default router
