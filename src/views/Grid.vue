<template>

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
      <button class="btn">
        <a :href="card.btnLink" :title="card.btnTitle" target="_blank">{{ card.btnText }}</a>
      </button>
    </div>
  </div>

</template>



<script>

export default {
  name: 'GridView',
  data() {
    return {
      cards: this.$store.state.cards
    }
  }
}

</script>



<style scoped>

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
  margin: 0 0 1em;
  width: 60%;
  padding: 1em 0;
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

@media only screen and (max-width: 1080px) {
  .main-gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(150px, auto);
  }
}

@media only screen and (max-width: 720px) {
  .card {
    width: 70vw;
    justify-self: center;
  }
  .main-gallery {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(150px, auto);
  }
}

@media only screen and (max-width:500px) {
  .card {
    width: 70vw;
    justify-self: center;
    margin: 0 auto;
    padding: 0.5rem 0;
  }
  .main-gallery {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(150px, auto);
    padding: 0;
  }
}

</style>