<template>

  <div class="main-gallery-list">
    <div class="card" v-for="card in cards">
      <h4 class="card-header">{{ card.header }}</h4>
      <img class="gallery-image img-thumbnail" :src="card.image" :alt="card.imageAlt">
      <div class="card-info">
        <h5>{{ card.subtitle }}</h5>
        <p>{{ card.description }}</p>
      </div>

      <button class="btn btn-one">
        <a :href="card.btnLink" :title="card.btnTitle" target="_blank">{{ card.btnText }}</a>
      </button>
      <button class="btn btn-two">
        <a :href="card.href">Project Details</a>
      </button>
    </div>
  </div>

</template>

<script setup>
import { useProjectsStore } from '../store/ProjectsStore';

const projectsStore = useProjectsStore();
const cards = projectsStore.cards;
</script>

<style scoped>

.main-gallery-list {
  background:  linear-gradient(
    rgba(0, 0, 10, .9),
    rgba(0, 0, 0, .8)
  ),
  url('../assets/splatter.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: ghostwhite;
  margin: 0 1rem;
}

/* CARD DIVs - CSS Grid */

.card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 25% 25% 25% 25%;
  align-items: center;
  justify-content: center;
  border: 2px solid ghostwhite;
  border-radius: 15px;
  padding: .5em;
  height: 40vh;
}

.gallery-image {
  background: rgba(12, 77, 105, .2);
  justify-self: center;
  width: 80%;
  height: 30vh;
  object-fit: cover;
  grid-column: 1/2;
  grid-row: 1/5;
}

.card-header {
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: start;
  margin-top: 0;
}
.card-info {
  grid-column: 2/3;
  grid-row: 3/4;
  align-self: start;
  margin: 0;
}

div {
  margin-top: 2em;
}
 
.img-thumbnail {
  border: 2px solid ghostwhite;
  border-radius: 15px;
  padding: 1em;
}

.btn {
  margin: 0 0 1em;
  width: 50%;
  padding: 1em 0;
  grid-column: 3;
  justify-self: center;
  align-self: end;
}
.btn-one {
  grid-row: 2;
}
.btn-two {
  grid-row: 3;
}

a {
  color: ghostwhite;
  text-decoration: none;
  width: 100%;
  height: 100%;
}

/*********************
Media Querries
**********************/

@media only screen and (max-width: 1090px) {
  .main-gallery-list {
    margin: 0 1rem;
  }
  .btn a {
    font-size: 1rem;
    padding: 1em;
  }
}

@media only screen and (max-width: 820px) {
  .btn {
    width: 70%;
    font-size: 0.8rem;
  }
  .btn a {
    padding: 1em;
  }
  .card {
    width: 70vw;
    justify-self: center;
    margin: 0.9rem auto 0;
  }
}

@media only screen and (max-width: 721px) {
  .btn {
    width: 80%;
    font-size: 0.4rem;
  }
  .card {
    width: 70vw;
    justify-self: center;
    margin: 0.9rem auto 0;
  }
  .img-thumbnail {
    border: 1px solid ghostwhite;
    border-radius: 3px;
    padding: 0.5rem;
  }

}

</style>