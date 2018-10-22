<template>

  <div class="main-gallery">

    <div class="card">
      <h4>Arquitectura Apocaliptica Srl</h4>
      <a href="https://carlosdvp.github.io/Apocaliptica/" data-toggle="tooltip" title="Arquitectura Apocaliptica - Top Section" target="_blank">
        <img class="gallery-image img-thumbnail" src="../assets/Apocaliptica-1.jpg" alt="project image">
      </a>
      <div>
        <h5>Centro de Diseno y Construccion</h5>
        <p>Santa Cruz de la Sierra, Bolivia</p>
      </div>
      <div>
        <a href="http://www.arquitecturaapocaliptica.com" title="Arquitectura Apocaliptica" target="_blank">Visit the Website</a>
      </div>
    </div>

    <div class="card">
      <h5>Arquitectura Apocaliptica Srl</h5>
      <a href="https://carlosdvp.github.io/Apocaliptica/" data-toggle="tooltip" title="Arquitectura Apocaliptica" target="_blank">
        <img class="gallery-image img-thumbnail" src="../assets/Apocaliptica-2.jpg" alt="project image">
      </a>
      <div>
        <h5>Github Repository</h5>
        <p>Source code and project details.</p>
      </div>
      <div>
        <a href="https://carlosdvp.github.io/Apocaliptica/" title="Arquitectura Apocaliptica" target="_blank">Visit the Project Repo</a>
      </div>
    </div>

    <div class="card">
      <h4>DragonBall SVG Animation</h4>
      <a href="https://carlosdvp.github.io/DBZ-Animation/" data-toggle="tooltip" title="DragonBall SVG Animation" target="_blank">
        <img class="gallery-image img-thumbnail" src="../assets/SVG-Animation.jpg" alt="DBZ project image">
      </a>
      <div>
        <h5>CSS Animations</h5>
        <p>Animating SVG images with CSS</p>
      </div>
      <div>
        <a href="https://carlosdvp.github.io/DBZ-Animation/" title="DragonBall SVG Animation" target="_blank">Visit the Project</a>
      </div>
    </div>

    <div class="card">
      <h4>Responsive Portfolio</h4>
      <a href="http://carlosdvp.github.io/Responsive-Portfolio/" data-toggle="tooltip" title="Responsive Portfolio Project" target="_blank">
        <img class="gallery-image img-thumbnail" src="../assets/Responsive-Portfolio.jpg" alt="Responsive Portfolio Project">
      </a>
      <div>
        <h5>Responsive Portfolio Project</h5>
        <p>Santa Cruz de la Sierra, Bolivia</p>
      </div>
      <div>
        <a href="http://carlosdvp.github.io/Responsive-Portfolio/" title="Responsive Portfolio Project" target="_blank">Visit the Project</a>
      </div>
    </div>

    <div class="card">
      <h4>Website Project 3</h4>
      <a href="https://carlosdvp.github.io/Website-project-3/" data-toggle="tooltip" title="Portfolio Project Number 3" target="_blank">
        <img class="gallery-image img-thumbnail" src="../assets/Website-project-3.jpg" alt="Portfolio Poject 3">
      </a>
      <div>
        <h5>Portfolio Website Number 3</h5>
        <p>Falls Church, VA</p>
      </div>
      <div>
        <a href="https://carlosdvp.github.io/Website-project-3/" title="Portfolio Project Number 3" target="_blank">Visit the Project</a>
      </div>
    </div>

    <div class="card">
      <h4>JS Basic Chatbot Project</h4>
      <a href="https://carlosdvp.github.io/First-bot-Chatbot/" data-toggle="tooltip" title="Basic JS chatbot" target="_blank">
        <img class="gallery-image img-thumbnail" src="../assets/basic-chatbot.png" alt="Js chatbot Project">
      </a>
      <div>
        <h5>JS Project</h5>
        <p>Basic Chatbot App written in JavaScript</p>
      </div>
      <div class="btn">
        <a href="http://carlosdvp.github.io/Udacity-Resume-Project/" title="Udacity Js Project" target="_blank">Visit the Project</a>
      </div>
    </div>

  </div>

</template>



<script>
export default {
  name: 'Gallery'
}
</script>



<style scoped>
  
.main-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1.5em;
  margin: 0 auto;
  padding: 6rem 2rem;
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
  background: transparent;
  border: 2px solid #0099CC;
  border-radius: 6px;
}

a {
  color: lightseagreen;
  text-decoration: none;
}
</style>
