import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '../views/FirstPage.vue'
import AboutView from '../views/AboutView.vue'
import Test from '../views/Test.vue'
import SignUp from '../views/SignUp-Page.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
