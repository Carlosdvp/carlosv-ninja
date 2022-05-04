import { createRouter, createWebHistory } from 'vue-router'

import App from '@/App.vue'
import Jumbotron from '@/views/Jumbotron.vue'
import About from '@/views/About.vue'
import Gallery from '@/views/Gallery.vue'
import ProjectOne from '@/views/Project-1.vue'
import ProjectTwo from '@/views/Project-2.vue'
import ProjectThree from '@/views/Project-3.vue'


const routes = [
    {
      path: '/',
      name: 'home',
      component: Jumbotron
    },
    {
      path: '/portfolio',
      name: 'main-gallery',
      component: Gallery
    },
    {
      path: '/portfolio/project-1',
      name: 'project-1',
      component: ProjectOne
    },
    {
      path: '/portfolio/project-2',
      name: 'project-2',
      component: ProjectTwo
    },
    {
      path: '/portfolio/project-3',
      name: 'project-3',
      component: ProjectThree
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
