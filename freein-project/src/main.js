import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSlideBar from 'vue-slide-bar'
import Progress from 'k-progress'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.component('VueSlideBar', VueSlideBar)
Vue.component('VueProgressBar', Progress)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')