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



<script>

export default {
  name: 'ListView',
  data() {
    return {
      cards: this.$store.state.cards
    }
  }
}
</script>



<style scoped>

.main-gallery-list {
  background:  linear-gradient(
    rgba(50, 100, 100, .7),
    rgba(50, 100, 100, .7)
  ),
  url('../assets/splatter.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: ghostwhite;
  margin: 0 auto;
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
  background: transparent;
  border: 2px solid #0099CC;
  border-radius: 6px;
  margin: 0 0 1em;
  width: 50%;
  padding: 1em 0;
  color: ghostwhite;
  font-size: 1rem;
  cursor: pointer;
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