import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '../views/FirstPage.vue'
import AboutView from '../views/AboutView.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
