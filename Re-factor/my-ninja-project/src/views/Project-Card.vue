<template>
  <div class="card">
    <h4>Arquitectura Apocaliptica Srl</h4>
    <a href="https://carlosdvp.github.io/Apocaliptica/" data-toggle="tooltip" title="Arquitectura Apocaliptica - Top Section" target="_blank">
      <img class="gallery-image img-thumbnail" src="../assets/Apocaliptica-1.jpg" alt="project image">
    </a>
    <div>
      <h5>Centro de Diseno y Construccion</h5>
      <p>Santa Cruz de la Sierra, Bolivia</p>
    </div>
    <div class="btn">
      <a href="http://www.arquitecturaapocaliptica.com" title="Arquitectura Apocaliptica" target="_blank">Visit the Website</a>
    </div>
  </div>
</template>

<script>
	
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

  .main-gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(150px, auto);
  }
}

@media only screen and (max-width: 720px) {
  .btn a {
    font-size: 1.3em;
    padding: 1em;
  }

  .main-gallery {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(150px, auto);
  }

  .card {
    width: 70vw;
    justify-self: center;
  }
}

@media only screen and (max-width: 720px) {
  .btn a {
    font-size: .8em;
  }
}
</style>
		