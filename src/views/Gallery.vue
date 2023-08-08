<template>
  <div class="gallery-page">

    <h1 id="gallery-title">Project Gallery</h1>
    <div>
      <button class="btn" ref="grid" @click="addGridClass()">
        Grid View
      </button>
      <button class="btn" ref="list" @click="addListClass()">
        List View
      </button>
    </div>

    <div :class="[ isList ? 'list-view' : 'grid-view' ]">
      <GridView v-if="isGrid" />
      <ListView v-if="isList" />
    </div>

  </div>
</template>

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

<style>

.gallery-page {
  background-color: rgba(0, 0, 10, .7);
  margin: 0;
}

#gallery-title {
  color: ghostwhite;
  text-shadow: darkred 1px 1px;
  font-family: serif;
  font-size: 3rem;
  margin: 0;
  padding: 0.3em 0;
  letter-spacing: .15em;
  border-bottom: 1px solid whitesmoke;
}

.btn {
  justify-self: center;
  background: transparent;
  border: 2px solid #0099CC;
  border-radius: 6px;
  margin: 1.5rem 0.3rem 1rem;
  width: 10%;
  padding: 0.5rem 0;
  color: ghostwhite;
  font-size: 1rem;
  cursor: pointer;
}

.btn:hover {
  background: #0099CC;
}

/*********************
Media Querries
**********************/

@media only screen and (max-width: 720px) {
  .btn {
    font-size: 1rem;
    padding: 0.5rem;
    width: 15%;
  }
}

@media only screen and (max-width: 480px) {
  .btn {
    font-size: .8em;
  }
}

</style>