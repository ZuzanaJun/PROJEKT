import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Workspace from '../views/Workspace.vue'
import Gallery from '../views/Gallery.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/workspace/:id?',
    name: 'Workspace',
    component: Workspace
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
