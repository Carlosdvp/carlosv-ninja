import Vue from 'vue'
import Router from 'vue-router'
import Gallery from './views/Gallery.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/portfolio',
			name: 'main-gallery',
			component: Gallery
		}
	]
})