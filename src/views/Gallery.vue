<template>

<div class="gallery-page">
  <h1 id="gallery-title">Project Gallery</h1>
  
  <div class="main-gallery">

    <div class="card" v-for="card in cards">
      <h4>{{ card.header }}</h4>
      <router-link :to="card.href" data-toggle="tooltip" :title="card.title">
        <img class="gallery-image img-thumbnail" :src="card.image" :alt="card.imageAlt">
      </router-link>
      <div>
        <h5>{{ card.subtitle }}</h5>
        <p>{{ card.description }}</p>
      </div>
      <div class="btn">
        <a :href="card.btnLink" :title="card.btnTitle" target="_blank">{{ card.btnText }}</a>
      </div>
    </div>

  </div>
</div>

</template>



<script>

export default {
  name: 'Gallery',
  data() {
    return {
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
          href: "portfolio/project-2",
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
          href: "portfolio/project-3",
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

    }
  }
}
</script>



<style scoped>

.gallery-page {
  background-color: #676a70;
  margin: 0;
}

.main-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1.5em;
  margin: 0 auto;
  padding: 4rem 6rem;
  background:  linear-gradient(
    rgba(50, 100, 100, .7),
    rgba(50, 100, 100, .7)
  ),
  url('../assets/splatter.jpg');
  background-repeat: round;
  background-size: contain;
  color: ghostwhite;
}

#gallery-title {
  color: ghostwhite;
  text-shadow: darkred 1px 1px;
  font-family: serif;
  font-size: 3em;
  margin: 0;
  padding: 0.3em 0;
  letter-spacing: .15em;
}

.card {
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
  justify-content: center;
  border: 2px solid ghostwhite;
  border-radius: 15px;
  padding: .5em;
}

.gallery-image {
  background: rgba(12, 77, 105, .2);
  width: 80%;
  height: 50vh;
  object-fit: cover;
}

div {
  margin-bottom: 2em;
  margin-top: 2em;
}
 
.img-thumbnail {
  border: 2px solid ghostwhite;
  border-radius: 15px;
  padding: 1em;
}

.btn {
  justify-self: center;
  background: transparent;
  border: 2px solid #0099CC;
  border-radius: 6px;
  margin: 0 0 1em;
  width: 60%;
  padding: 1em 0;
}

.btn:hover {
  background: #0099CC;
}

a {
  color: ghostwhite;
  text-decoration: none;
  width: 100%;
  height: 100%;
}

.btn a {
  padding: 1em 2em;
}

@media only screen and (max-width: 1090px) {
  .btn a {
    font-size: .8em;
    padding: 1em;
  }

  .main-gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(150px, auto);
  }
}

@media only screen and (max-width: 720px) {
  .btn a {
    font-size: 1.3em;
    padding: 1em;
  }

  .main-gallery {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(150px, auto);
  }

  .card {
    width: 70vw;
    justify-self: center;
  }
}

@media only screen and (max-width: 721px) {
  .btn a {
    font-size: .8em;
  }
}

</style>