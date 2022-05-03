import { createStore } from 'vuex'

const store = createStore({
	state: {
		cards: [
      {
        header: "Arquitectura Apocaliptica Srl",
        href: "/portfolio/project-1",
        title: "Arquitectura Apocaliptica - Top Section",
        image: require("../../public/images/Apocaliptica-1.jpg"),
        imageAlt: "project image",
        subtitle: "Centro de Diseno y Construccion",
        description: "Santa Cruz de la Sierra, Bolivia",
        btnLink: "https://carlosdvp.github.io/Apocaliptica/",
        btnTitle: "Arquitectura Apocaliptica",
        btnText: "Visit the Website",
        id: 1
      },
      {
        header: "BTC / ETH Pricefeed",
        href: "/portfolio/project-2",
        title: "Pricefeed",
        image: require("../../public/images/BTC_ETH.jpg"),
        imageAlt: "BTC and ETH coins",
        subtitle: "API and Websockets",
        description: "Live pricefeed with the Binance API.",
        btnLink: "https://carlosdvp.github.io/btc-eth-Pricefeed/",
        btnTitle: "Pricefeed",
        btnText: "Visit the Project",
        id: 2
      },
      {
        header: "Vue 3 Bird app Clone",
        href: "/portfolio/project-3",
        title: "Vue app project",
        image: require("../../public/images/bird.jpg"),
        imageAlt: "Some bird",
        subtitle: "Vue 3 Project",
        description: "Bird app clone created with Vue 3",
        btnLink: "https://birdapp-clone.herokuapp.com/",
        btnTitle: "Bird app clone",
        btnText: "Visit the Project",
        id: 3
      },
      {
        header: "Chuck Norris Fact Generator",
        href: "/portfolio/project-4",
        title: "Chuck Facts App",
        image: require("../../public/images/chuck-facts.png"),
        imageAlt: "Chuck Norris Facts",
        subtitle: "JS Project",
        description: "App to consume the Chuck Norris API with Axios",
        btnLink: "https://carlosdvp.github.io/Chuck-Fact-Generator/",
        btnTitle: "Chuck Norris Facts",
        btnText: "Visit the Project",
        id: 4
      },
      {
        header: "Clickable Color Changing Grid",
        href: "/portfolio/project-5",
        title: "Color Changing Grid",
        image: require("../../public/images/color-grid.png"),
        imageAlt: "Colored grid",
        subtitle: "D3JS Project",
        description: "Grid with clickable cells",
        btnLink: "https://carlosdvp.github.io/Color-Changing-Squares-with-D3/",
        btnTitle: "Colored Grid",
        btnText: "Visit the Project",
        id: 5
      }
    ],
    projects: [
    	{
    		id: 1,
        href: "https://carlosdvp.github.io/Apocaliptica/",
        linkTitle: "Arquitectura Apocaliptica - Top Section",
        image: require("../../public/images/Apocaliptica-1.jpg"),
        imageAlt: "project image",
        title: "Arquitectura Apocaliptica Srl",
        subtitle: "Centro de Diseno y Construccion",
        subtitleTwo: "Santa Cruz de la Sierra, Bolivia",
        descriptionOne: "Website for an Architecture company, with 6 main sections on the Homepage; the Navbar, a Jumbotron intro, the Gallery thumbnails in 3 separate sliders. A presentation section introducing the company's design philosohy and another slider for specific project details and employees. Followed by a contact details section.",
        descriptionTwo: "Each thumbnail links to a project specific page, which contains a slider gallery for that particular house or building.",
        techStack: ["HTML", "CSS3", "JavaScript", "Bootstrap v4.0", "jQuery"],
        btnLink: "https://carlosdvp.github.io/Apocaliptica/",
        btnTitle: "Arquitectura Apocaliptica"
      },
      {
      	id: 2,
        href: "https://carlosdvp.github.io/btc-eth-Pricefeed/",
        linkTitle: "Pricefeed",
        image: require("../../public/images/BTC_ETH.jpg"),
        imageAlt: "project image",
        title: "BTC / ETH Pricefeed",
        subtitle: "API and Websockets",
        subtitleTwo: "Live pricefeed with the Binance API.",
        descriptionOne: "Proof of concept app to get price information for a crypto pair using the Binance API and websockets.",
        descriptionTwo: "Connection made with the Testnet, API calls made using Axios.",
        techStack: ["HTML", "CSS3", "JavaScript", "VueJS", "NodeJS", "Axios"],
        btnLink: "https://carlosdvp.github.io/btc-eth-Pricefeed/",
        btnTitle: "BTC-ETH Pricefeed"
      },
      {
      	id: 3,
        href: "https://birdapp-clone.herokuapp.com/",
        linkTitle: "Bird app clone",
        image: require("../../public/images/bird.jpg"),
        imageAlt: "project image",
        title: "Vue 3 Bird App Clone",
        subtitleTwo: "Bird clone",
        descriptionOne: "This is a simple clone of the blue bird app, built using Vue 3, along with Vue router and Vuex for state management. Deployed to Heroku",
        techStack: ["HTML", "CSS3", "JavaScript", "Vue 3", "Vue router", "Vuex"],
        btnLink: "https://birdapp-clone.herokuapp.com/",
        btnTitle: "Vue 3 App project"
      },
      {
      	id: 4,
        href: "https://carlosdvp.github.io/Chuck-Fact-Generator/",
        linkTitle: "Chuck Facts App",
        image: require("../../public/images/chuck-facts.png"),
        imageAlt: "project image",
        title: "Chuck Norris Facts",
        subtitleTwo: "JS Project",
        descriptionOne: "Javascript App to consume the Chuck Norris API with Axios.",
        techStack: ["HTML", "CSS3", "JavaScript", "Axios"],
        btnLink: "https://carlosdvp.github.io/Chuck-Fact-Generator/",
        btnTitle: "Chuck Norris Facts"
      },
      {
      	id: 5,
        href: "https://carlosdvp.github.io/Color-Changing-Squares-with-D3/",
        linkTitle: "Color Changing Grid",
        image: require("../../public/images/color-grid.png"),
        imageAlt: "project image",
        title: "Color Changing Grid",
        subtitleTwo: "D3JS Project",
        descriptionOne: "Grid with clickable cells that change colors once clicked, built using JS and D3js",
        techStack: ["HTML", "CSS3", "JavaScript", "D3js"],
        btnLink: "https://carlosdvp.github.io/Color-Changing-Squares-with-D3/",
        btnTitle: "Color Changing Grid"
      }
    ]
	},
	mutations: {
		GET_TITLE (state, payload) {
			let project = state.projects.find((project) => {
				let title;

				if ((project.id - 1) === payload) {
					title = project.title
				}
				console.log(title)
				return title
			})
		},
		GET_ID (state, index) {
			let project = state.projects.find((project) => {
				let id;

				if ((project.id - 1) === index) {
					id = project.id
				}
				console.log(id)
				return id
			})
		}
	},
	actions: {
		getTitle({ commit }, payload) {
			commit('GET_TITLE', payload)
		},
		getTheId({ commit }, payload) {
			commit('GET_ID', payload)
		}
	}
})

export default store