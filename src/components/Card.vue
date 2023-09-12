<template>
  <div
    class="grid md:grid-cols-[40%,60%] w-[70vw] h-auto items-center border-2 border-white py-16 px-5 bg-slate-400 bg-opacity-60 mx-auto my-0 mt-10">

    <a :href="project.href" data-toggle="tooltip" target="_blank">
      <img
        class="gallery-image img-thumbnail w-[90%] object-cover mx-auto my-0 mb-4"
        :src="project.image"
        :alt="project.imageAlt">
    </a>

    <div>
      <h2 class="py-4 bg-slate-500">
        {{ project.title }}
      </h2>
      <p class="py-4 border-y-2 border-black">
        {{ project.subtitleTwo }}
      </p>
      <div
        class="py-4 border-b-2 border-slate-600 mb-4">
        <h4 class="text-left ml-6 text-slate-800">
          Description
        </h4>
        <div class="text-left ml-6 pt-6">
          <p>{{ project.descriptionOne }}</p>
          <p>{{ project.descriptionTwo }}</p>
        </div>
      </div>
      <h4
        class="text-left ml-6 text-slate-600">
        Tech Stack:
      </h4>
      <ul>
        <li v-for="tech in project.techStack">
          {{ tech }}          
        </li>
      </ul>
    </div>
    <div
      class="border-2 border-white py-4 w-[80%] min-w-[70%] sm:text-sm sm:mt-8 md:text-base justify-self-center hover:bg-slate-500 hover:text-white">
      <a :href="project.btnLink" :title="project.btnTitle" target="_blank">
        {{ project.btnTitle }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: Object
});
</script>

<style scoped>
/**************************************
  Media Queries
***************************************/

@media only screen and (max-width: 1090px) {
  .card {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 720px) {
  .card {
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(150px, auto);
    width: 70vw;
    justify-self: center;
  }
}
</style>
