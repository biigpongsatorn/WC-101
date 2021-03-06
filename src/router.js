import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vue-custom-element',
      name: 'vue-custom-element',
      component: () => import('./views/VueCustomElement.vue')
    },
    {
      path: '/vue-web-component-wrapper',
      name: 'vue-web-component-wrapper',
      component: () => import('./views/VueWebComponentWrapper.vue')
    }
  ]
})
