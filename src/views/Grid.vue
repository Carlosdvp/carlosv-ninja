<script setup>
import { useProjectsStore } from '../store/ProjectsStore';

const projectsStore = useProjectsStore();
const cards = projectsStore.cards;
</script>

<template>
  <div class="main-gallery grid h-full">
    <div
      class="grid p-4 grid-cols-[100%] border-2 border-gray-200 md:w-[30vw]"
      v-for="card in cards">

      <h4 class="text-xl py-2 text-slate-300 bg-slate-800 mb-2">
        {{ card.header }}
      </h4>
      <div class="h-[20vh]">
        <router-link
          class="h-[100%]"
          :to="card.href"
          data-toggle="tooltip"
          :title="card.title">
          <img
            class="mx-auto my-0 object-cover h-full"
            :src="card.image"
            :alt="card.imageAlt">
        </router-link>
      </div>


      <div class="py-3 text-slate-200">
        <h4>{{ card.subtitle }}</h4>
        <p>{{ card.description }}</p>
      </div>

      <button class="w-[50%] p-2 border border-white rounded-sm justify-self-center hover:bg-[#0099CC]">
        <a
          class="text-lg text-slate-300"
          :href="card.btnLink"
          :title="card.btnTitle"
          target="_blank">
          {{ card.btnText }}
        </a>
      </button>

    </div>
  </div>
</template>

<style scoped>
.main-gallery {
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1.5em;
  padding: 2rem;
  background:  linear-gradient(
    rgba(0, 0, 10, .8),
    rgba(0, 0, 0, .7)
  ),
  url('../assets/splatter.jpg');
  background-repeat: round;
  background-size: contain;
  color: ghostwhite;
}

@media only screen and (max-width: 1080px) {
  .main-gallery {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: minmax(150px, auto);
  }
}

@media only screen and (max-width: 720px) {
  .main-gallery {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(150px, auto);
  }
}
</style>