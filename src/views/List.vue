<template>
  <div class="main-gallery-list md:w-[70%] sm:w-[90%] max-w-[1080px] mx-auto my-0">
    <div
      class="card h-[18vh] grid grid-cols-[1fr,1fr,1fr] grid-rows-[25%,25%,25%,25%] items-center justify-center border border-white my-2"
      v-for="card in cards">
      <h4
        class="card-header hidden sm:block">
        {{ card.header }}
      </h4>
      <img
        class="gallery-image border border-white rounded-sm justify-self-center w-[70%] h-[80%]"
        :src="card.image"
        :alt="card.imageAlt">
      <div class="card-info hidden md:block">
        <h5>
          {{ card.subtitle }}
        </h5>
        <p>
          {{ card.description }}
        </p>
      </div>
      <button class="btn-one md:w-[60%] sm:w-[80%] py-2 justify-self-center border-2 border-white hover:bg-slate-600">
        <a
          class="text-white no-underline w-[100%] h-[100%]"
          :href="card.btnLink"
          :title="card.btnTitle"
          target="_blank">
          {{ card.btnText }}
        </a>
      </button>
      <button class="btn-two md:w-[60%] sm:w-[80%] py-2 justify-self-center border-2 border-white hover:bg-slate-500">
        <a
          class="text-white no-underline w-[100%] h-[100%]"
          :href="card.href">
          Project Details
        </a>
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
}

.gallery-image {
  object-fit: cover;
  grid-column: 1/2;
  grid-row: 1/5;
}

.card-header {
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: start;
}
.card-info {
  grid-column: 2/3;
  grid-row: 3/4;
  align-self: start;
}

.btn-one {
  grid-row: 2;
  grid-column: 3;
}
.btn-two {
  grid-row: 3;
  grid-column: 3;
}

/*********************
Media Querries
**********************/
  @media only screen and (max-width: 640px) {
  button {
    width: 90%;
    margin-right: 10px;
  }
  .btn-one {
    grid-column: 2/4;
  }
  .btn-two {
    grid-column: 2/4;
  }
}
</style>
