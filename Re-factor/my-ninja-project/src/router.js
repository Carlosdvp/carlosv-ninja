import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Jumbotron from './views/Jumbotron.vue'
import Gallery from './views/Gallery.vue'
import ProjectCard from './views/Project-Card.vue'

Vue.use(Router)

export default new Router({
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
			path: '/portfolio/project-card',
			name: 'project-card',
			component: ProjectCard
		}
	]
})