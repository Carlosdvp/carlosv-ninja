<template>

  <div class="card">

    <a href="https://carlosdvp.github.io/Apocaliptica/" data-toggle="tooltip" title="Arquitectura Apocaliptica - Top Section" target="_blank">
      <img class="gallery-image img-thumbnail" src="../assets/Apocaliptica-1.jpg" alt="project image">
    </a>

    <div>
      <h2>Arquitectura Apocaliptica Srl</h2>
      <h5>Centro de Diseno y Construccion</h5>
      <p>Santa Cruz de la Sierra, Bolivia</p>
      <div id="description">
        <h4>Description</h4>
        <p>Website for an Architecture company, with 6 main sections on the Homepage; the Navbar, a Jumbotron intro, the Gallery thumbnails in 3 separate sliders. A presentation section introducing the company's design philosohy and another slider for specific project details and employees. Followed by a contact details section.</p>
        <p>Each thumbnail links to a project specific page, which contains a slider gallery for that particular house or building.</p>
      </div>
      <br>
      <h4 id="list-title">Tech Stack</h4>
      <ul>
        <li>HTML</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Bootstrap v4.0</li>
        <li>jQuery</li>
      </ul>
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
  grid-template-columns: 45% 54%;
  align-items: center;
  justify-content: center;
  border: 2px solid ghostwhite;
  border-radius: 15px;
  padding: .5em;
  margin: 3em;
}

.gallery-image {
  background: rgba(12, 77, 105, .2);
  width: 54%;
  height: 72vh;
  object-fit: cover;
  margin: 1em 0;
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

ul, #list-title {
  text-align: left;
  padding-left: 4.5em;
}

#list-title {
  padding-left: 3.4em;
}

#description p {
  padding: 0 3.6em;
  text-align: left;
}



/**************************************
  Media Queries
***************************************/

@media only screen and (max-width: 1090px) {
  .btn a {
    font-size: .8em;
    padding: 1em;
  }

  .card {
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

  .card {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(150px, auto);
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
		