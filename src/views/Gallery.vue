<script setup>
import GridView from '@/views/Grid.vue'
import ListView from '@/views/List.vue'
import { ref } from 'vue'

const isList = ref(false)
const isGrid = ref(true)

function addListClass() {
  isList.value = true
  isGrid.value = false
}

function addGridClass() {
  isList.value = false
  isGrid.value = true
}
</script>

<template>
  <div class="bg-black bg-opacity-80 m-0 text-center">
    <h1
      class="text-white font-serif text-5xl m-0 py-6 border-b-2 border-white tracking-widest">
      Project Gallery
    </h1>

    <div>
      <button
        class="hover:bg-[#0099CC] justify-self-center border-2 border-blue-400 rounded-sm my-6 mx-2 md:w-[10%] py-2 text-white text-lg cursor-pointer"
        ref="grid"
        @click="addGridClass()">
        Grid View
      </button>
      <button
        class="hover:bg-[#0099CC] justify-self-center border-2 border-blue-400 rounded-sm my-6 mx-2 md:w-[10%] py-2 text-white text-lg cursor-pointer"
        ref="list"
        @click="addListClass()">
        List View
      </button>
    </div>

    <div :class="[ isList ? 'list-view' : 'grid-view' ]">
      <GridView v-if="isGrid" />
      <ListView v-if="isList" />
    </div>
  </div>
</template>

<style>
/*********************
Media Querries
**********************/
@media only screen and (max-width: 720px) {
  .btn {
    font-size: 1rem;
    padding: 0.5rem;
    width: 30%;
  }
}

@media only screen and (max-width: 480px) {
  .btn {
    font-size: .8em;
    width: 40%;
  }
}
</style>
