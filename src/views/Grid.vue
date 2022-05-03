<template>

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
}

@media only screen and (max-width: 720px) {
  .btn a {
    font-size: 1.3em;
    padding: 1em;
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