<template>

  <div class="gallery-page">
    <h1 id="gallery-title">Project Gallery</h1>
    
    <div>
      <button class="btn" ref="grid" @click="addGridClass()">Grid View</button>
      <button class="btn" ref="list" @click="addListClass()">List View</button>
    </div>

    <div class="main-gallery" :class="[ isList ? 'list-view' : 'grid-view' ]">
      <GridView v-if="isGrid" />
      <ListView v-if="isList" />
    </div>
  </div>

</template>



<script>
import GridView from '@/views/Grid.vue'
import ListView from '@/views/List.vue'

export default {
  name: 'Gallery',
  components: {
    GridView,
    ListView
  },
  data() {
    return {
      isList: false,
      isGrid: true
    }
  },
  methods: {
    // each method will add the required class to the div containing the cards
    addListClass() {
      this.isList = true
      this.isGrid = false
    },
    // first clear the List class so we get the Grid class on screen
    addGridClass() {
      this.isList = false
      this.isGrid = true
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
}

.btn:hover {
  background: #0099CC;
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
  .btn {
    font-size: 1.3em;
    padding: 1em;
  }

  .main-gallery {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(150px, auto);
  }
}

@media only screen and (max-width: 721px) {
  .btn {
    font-size: .8em;
  }
}

</style>