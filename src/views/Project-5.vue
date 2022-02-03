<template>

<div>

  <div class="card" v-for="project in projects">

    <a :href="project.href" data-toggle="tooltip" title="" target="_blank">
      <img class="gallery-image img-thumbnail" :src="project.image" :alt="project.imageAlt">
    </a>

    <div>
      <h2>{{ project.title}}</h2>
      <h5>{{ project.subtitle }}</h5>
      <p>{{ project.subtitleTwo }}</p>
      <div id="description">
        <h4>Description</h4>
        <p>{{ project.descriptionOne }}</p>
        <p>{{ project.descriptionTwo }}</p>
      </div>
      <br>
      <h4 id="list-title">Tech Stack</h4>
      <ul>
        <li v-for="tech in project.techStack">
          {{ tech }}          
        </li>
      </ul>
    </div>
    <div class="btn">
      <a :href="project.btnLink" :title="project.btnTitle" target="_blank">Visit the Website</a>
    </div>

  </div>

</div>

</template>

<script>

import Card from '@/components/Card.vue'

export default {
  name: "Project-4",
  data() {
    return {
      projects: [
        {
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
    }
  }
}

</script>

<style scoped>

.card {
  display: grid;
  width: 72vw;
  grid-template-columns: 45% 54%;
  align-items: center;
  justify-content: center;
  border: 2px solid ghostwhite;
  border-radius: 15px;
  padding: .5em;
  margin: 3em auto;
}

.gallery-image {
  background: rgba(12, 77, 105, .2);
  width: 54%;
  height: 72vh;
  object-fit: cover;
  margin: 1em 0;
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

ul, #list-title {
  text-align: left;
  padding-left: 4.5em;
}

#list-title {
  padding-left: 3.4em;
}

#description p {
  padding: 0 3.6em;
  text-align: left;
}



/**************************************
  Media Queries
***************************************/

@media only screen and (max-width: 1090px) {
  .btn a {
    font-size: .8em;
    padding: 1em;
  }

  .card {
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

  .card {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(150px, auto);
    width: 70vw;
    justify-self: center;
  }

}

@media only screen and (max-width: 720px) {
  .btn a {
    font-size: .8em;
  }
}
</style>
		