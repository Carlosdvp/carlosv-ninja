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
    ]
	},
	mutations: {
	},
	actions: {
	}
})

export default store