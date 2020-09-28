import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/all',
    name: 'All'
  },
  {
    path: '/active',
    name: 'Active'
  },
  {
    path: '/complete',
    name: 'Complete'
  },
  {
    path: '*',
    redirect: '/all'
  }
]

const router = new VueRouter({
  routes
})

export default router
