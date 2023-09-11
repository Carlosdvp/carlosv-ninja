import { defineStore } from "pinia";

export const useProjectsStore = defineStore('ProjectsStore', {
  state: () => ({
    cards: [
      {
        header: "HR Management App",
        href: "/portfolio/project-1",
        title: "Full stack project",
        image: require("../../public/images/Hr_management_app.png"),
        imageAlt: "Gif thumbanil of the video",
        subtitle: "Vue Full stack Project",
        description: "Application made with Vue, Pinia, Node, Typescript and MySql",
        btnLink: "https://github.com/Carlosdvp/hr-management-app",
        btnTitle: "HR App",
        btnText: "Visit Github Repo",
        id: 1
      },
      {
        header: "Email sync landing page prototype",
        href: "/portfolio/project-2",
        title: "Landing Page",
        image: require("../../public/images/landing_page.png"),
        imageAlt: "Gmail Card",
        subtitle: "Vue App with Vuex",
        description: "Email migration tool prototype.",
        btnLink: "https://sparkly-dusk-69a7da.netlify.app/",
        btnTitle: "Web App",
        btnText: "Visit the Project",
        id: 2
      },
      {
        header: "Uniswap Monitoring App",
        href: "/portfolio/project-3",
        title: "Web 3 App",
        image: require("../../public/images/uniswap_monitoring_app_react.png"),
        imageAlt: "project image",
        subtitle: "Web 3 React App",
        description: "Uniswap V3 on Ethereum network.",
        btnLink: "https://master.d3w1c8j89zr9es.amplifyapp.com/",
        btnTitle: "Website",
        btnText: "Visit the Project",
        id: 3
      },
      {
        header: "Meals App",
        href: "/portfolio/project-4",
        title: "Meals",
        image: require("../../public/images/Recipes_home.jpg"),
        imageAlt: "Recipes home",
        subtitle: "Vue UI with Vuex",
        description: "Meals DB API used for the recipes.",
        btnLink: "https://capable-horse-7d9263.netlify.app/",
        btnTitle: "Website",
        btnText: "Visit the Project",
        id: 4
      },
      // {
        // header: "",
        // href: "/portfolio/project-5",
        // title: "",
        // image: require("../../public/images/_______"),
        // imageAlt: "project image",
        // subtitle: "",
        // description: "",
        // btnLink: "",
        // btnTitle: "",
        // btnText: "",
        // id: 6
      // },
    ],
    projects: [
      {
        id: 1,
        href: "https://github.com/Carlosdvp/hr-management-app",
        linkTitle: "HR Application",
        image: require("../../public/images/Hr_management_app.png"),
        imageAlt: "screenshot fo the video",
        title: "HR Management App",
        subtitleTwo: "Full Stack Application",
        descriptionOne: "This is a full stack application built with Vue and Vite in the frotned, with Pinia for state management. API built with Node and Express with a MySql database. Prisma used as the ORM and Typescript used across the whole stack.",
        techStack: ["HTML", "TailwindCSS", "Typescript", "Vue 3", "Vue router", "Pinia", "MySql", "Docker", "Prisma", "Node", "Express"],
        btnLink: "https://www.loom.com/share/a9ce96c7ee0441fb8acf97bf3d7ac6fe?sid=1c0fe078-b082-4573-8d09-50d9f2024fe5",
        btnTitle: "Video Demo - Loom"
      },
      {
        id: 2,
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
        id: 3,
        href: "https://master.d3w1c8j89zr9es.amplifyapp.com/",
        linkTitle: "Uniswap React App",
        image: require("../../public/images/uniswap_monitoring_app_react.png"),
        imageAlt: "Uniswap app page",
        title: "Uniswap V3 Monitoring App",
        subtitleTwo: "A Web 3 App made with React",
        descriptionOne: "This app was built with React, Redux, Typescript, Tailwind and made with Vite, it uses the Alchemy API to talk to the Ethereum blockchain. Given a block number it will give you the Pools created from that block up until the current block. You can then use the Pool contract address to get the token balances, the token names and their symbols.",
        techStack: ["React", "Redux Toolkit", "React Router", "TypeScript", "HTML", "TailwindCSS", "Etheres.js", "Alchemy sdk"],
        btnLink: "https://master.d3w1c8j89zr9es.amplifyapp.com/",
        btnTitle: "Web 3 App"
      },
      {
        id: 4,
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
      // Saving an empty template for tuture projects
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
  actions: {},
  getters: {
    getNumberOfProjects: (state) => state.projects.length
  }
})
