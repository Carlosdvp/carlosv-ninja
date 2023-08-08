import { createRouter, createWebHistory } from 'vue-router'
import Jumbotron from '@/views/Jumbotron.vue'
import About from '@/views/About.vue'
import Gallery from '@/views/Gallery.vue'
import ProjectOne from '@/components/Project-1.vue'
import ProjectTwo from '@/components/Project-2.vue'
import ProjectThree from '@/components/Project-3.vue'
import ProjectFour from '@/components/Project-4.vue'
import ProjectFive from '@/components/Project-5.vue'

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
      path: '/portfolio/project-4',
      name: 'project-4',
      component: ProjectFour
    },
    {
      path: '/portfolio/project-5',
      name: 'project-5',
      component: ProjectFive
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
