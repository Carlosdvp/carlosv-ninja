import { defineStore } from "pinia";

export const useProjectsStore = defineStore('ProjectsStore', {
  state: () => ({
    cards: [
      {
        header: "Email sync landing page prototype",
        href: "/portfolio/project-1",
        title: "Landing Page",
        image: require("../../public/images/landing_page.png"),
        imageAlt: "Gmail Card",
        subtitle: "Vue App with Vuex",
        description: "Email migration tool prototype.",
        btnLink: "https://sparkly-dusk-69a7da.netlify.app/",
        btnTitle: "Web App",
        btnText: "Visit the Project",
        id: 1
      },
      {
        header: "DBZ Fights Game App",
        href: "/portfolio/project-2",
        title: "Game App",
        image: require("../../public/images/DBZ_fights.png"),
        imageAlt: "DBZ fight game",
        subtitle: "Vue App with Vuex",
        description: "Simple game using Vue 3 and Vuex 4.",
        btnLink: "https://main.d3dgx6dk21g271.amplifyapp.com/",
        btnTitle: "Game App",
        btnText: "Visit the Project",
        id: 2
      },
      {
        header: "Meals App",
        href: "/portfolio/project-3",
        title: "Meals",
        image: require("../../public/images/Recipes_home.jpg"),
        imageAlt: "Recipes home",
        subtitle: "Vue UI with Vuex",
        description: "Meals DB API used for the recipes.",
        btnLink: "https://capable-horse-7d9263.netlify.app/",
        btnTitle: "Website",
        btnText: "Visit the Project",
        id: 3
      },
      {
        header: "Vue 3 Bird app Clone",
        href: "/portfolio/project-4",
        title: "Vue app project",
        image: require("../../public/images/bird.jpg"),
        imageAlt: "Some bird",
        subtitle: "Vue 3 Project",
        description: "Bird app clone created with Vue 3",
        btnLink: "https://main.d3l5u4m4oy2plg.amplifyapp.com/",
        btnTitle: "Bird app clone",
        btnText: "Visit the Project",
        id: 4
      },
      // {
        // header: "Arquitectura Apocaliptica Srl",
        // href: "/portfolio/project-5",
        // title: "Arquitectura Apocaliptica - Top Section",
        // image: require("../../public/images/Apocaliptica-1.jpg"),
        // imageAlt: "project image",
        // subtitle: "Centro de Diseno y Construccion",
        // description: "Website for an Architecture company.",
        // btnLink: "https://carlosdvp.github.io/Apocaliptica/",
        // btnTitle: "Arquitectura Apocaliptica",
        // btnText: "Visit the Website",
        // id: 5
      // },
    ],
    projects: [
      {
        id: 1,
        href: "https://sparkly-dusk-69a7da.netlify.app/",
        linkTitle: "Netlify App",
        image: require("../../public/images/landing_page.png"),
        imageAlt: "project image",
        title: "Email Migration Landing Page",
        subtitleTwo: "Prototype of the application",
        descriptionOne: "This application is a prtotype to present a proof of work. The lefthand card showcases all of the functionality, while the righthand card is a placeholder. I used a Vuex store to handle the state for the button and the dropdown menus. App has been deployed to Netlify.",
        techStack: ["HTML", "JavaScript", "Vue 3", "Vuex 4", "CSS3", "CSS Grid"],
        btnLink: "https://sparkly-dusk-69a7da.netlify.app/",
        btnTitle: "Netlify App"
      },  
      {
        id: 2,
        href: "https://main.d3dgx6dk21g271.amplifyapp.com/",
        linkTitle: "DBZ Fight Game",
        image: require("../../public/images/DBZ_fights.png"),
        imageAlt: "DBZ game project image",
        title: "Dragonball Fights Game",
        subtitleTwo: "A simple Game to showcase Vue 3",
        descriptionOne: "This game app has been built with Vue 3 and it uses Vuex 4 for state management. The Player card is generated dynamically once a user clicks on one of the fighter options. And that action fires off a method that randomly selects an opponent for the user; the opponent has to be a different fighter.",
        techStack: ["Vue 3", "Vuex 4", "JavaScript", "HTML", "CSS"],
        btnLink: "https://main.d3dgx6dk21g271.amplifyapp.com/",
        btnTitle: "Game App"
      },
      {
        id: 3,
        href: "https://capable-horse-7d9263.netlify.app/",
        linkTitle: "Meals",
        image: require("../../public/images/Recipes_home.jpg"),
        imageAlt: "Recipes home",
        title: "Meals",
        subtitle: "Vue, Vuex and Meals API",
        subtitleTwo: "Consume 3rd party API with Vue UI.",
        descriptionOne: "Vue UI used to consume the API and display the recipes along with images of the dish and a cropped description of the instructions.",
        descriptionTwo: "The homepage shows 9 randomly selected recipes, and there are three other pages where the user can search by recipe name, by the first letter of the recipe or by the main ingredient.",
        techStack: ["HTML", "TailwindCSS", "JavaScript", "Vue 3", "Vuex", "Vue Router", "Composition API", "API", "Axios"],
        btnLink: "https://capable-horse-7d9263.netlify.app/",
        btnTitle: "Meals App"
      },
      {
        id: 4,
        href: "https://main.d3l5u4m4oy2plg.amplifyapp.com/",
        linkTitle: "Bird app clone",
        image: require("../../public/images/bird.jpg"),
        imageAlt: "project image",
        title: "Vue 3 Bird App Clone",
        subtitleTwo: "Bird clone",
        descriptionOne: "This is a simple clone of the blue bird app, built using Vue 3, along with Vue router and Vuex for state management. Deployed to Heroku",
        techStack: ["HTML", "CSS3", "JavaScript", "Vue 3", "Vue router", "Vuex"],
        btnLink: "https://main.d3l5u4m4oy2plg.amplifyapp.com/",
        btnTitle: "Vue 3 App project"
      },
      // {
        // id: 5,
        // href: "https://carlosdvp.github.io/Apocaliptica/",
        // linkTitle: "Arquitectura Apocaliptica - Top Section",
        // image: require("../../public/images/Apocaliptica-1.jpg"),
        // imageAlt: "project image",
        // title: "Arquitectura Apocaliptica Srl",
        // subtitle: "Centro de Diseno y Construccion",
        // subtitleTwo: "Santa Cruz de la Sierra, Bolivia",
        // descriptionOne: "Website for an Architecture company, with 6 main sections on the Homepage; the Navbar, a Jumbotron intro, the Gallery thumbnails in 3 separate sliders. A presentation section introducing the company's design philosohy and another slider for specific project details and employees. Followed by a contact details section.",
        // descriptionTwo: "Each thumbnail links to a project specific page, which contains a slider gallery for that particular house or building.",
        // techStack: ["HTML", "CSS3", "JavaScript", "Bootstrap v4.0", "jQuery"],
        // btnLink: "https://carlosdvp.github.io/Apocaliptica/",
        // btnTitle: "Arquitectura Apocaliptica"
      // },
      // Saving an emptytemplate for tuture projects
      //
      // {
      //  id: 4,
      //   href: "",
      //   linkTitle: "",
      //   image: require(""),
      //   imageAlt: "project image",
      //   title: "",
      //   subtitleTwo: "",
      //   descriptionOne: "",
      //   techStack: ["HTML", "CSS3", "JavaScript", ""],
      //   btnLink: "",
      //   btnTitle: ""
      // }
    ]
  }),
  actions: {

  },
  getters: {
    getNumberOfProjects: (state) => state.projects.length
  }
})
