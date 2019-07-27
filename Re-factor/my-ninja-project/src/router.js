import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Jumbotron from './views/Jumbotron.vue'
import Gallery from './views/Gallery.vue'
import ProjectOne from './views/Project-1.vue'
import ProjectTwo from './views/Project-2.vue'
import ProjectThree from './views/Project-3.vue'
import ProjectFour from './views/Project-4.vue'
import About from './views/About.vue'


Vue.use(Router)


let router = new Router({
	mode: 'history',
	routes: [
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
			path: '/about',
			name: 'about',
			component: About
		}
	]
})

export default router