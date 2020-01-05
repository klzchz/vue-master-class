import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: HelloWorld
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
