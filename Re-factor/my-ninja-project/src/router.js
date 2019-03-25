import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Jumbotron from './views/Jumbotron.vue'
import Gallery from './views/Gallery.vue'


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
		// {
		// 	path: '/portfolio/project/:id',
		// 	name: 'card',
		// 	component: Card,
		// 	props: true
		// }
	]
})