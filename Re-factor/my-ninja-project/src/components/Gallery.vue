<template>

<!-- Portfolio Gallery thumbnail section -->
  <div class="main-gallery m-3" id="portfolio-thumbnail">

    <div class="card-deck">
      <div class="card text-center col-sm-12 col-md-6 img-thumbnail gallery-image">
        <h4 class="card-header">Arquitectura Apocaliptica Srl</h4>
        <a href="https://carlosdvp.github.io/Apocaliptica/" data-toggle="tooltip" title="Arquitectura Apocaliptica - Top Section" target="_blank">
          <img class="card-img-top rounded img-fluid img-thumbnail gallery-image" src="dist/images/Apocaliptica-1.jpg" alt="project image" id="gallery-image-1">
        </a>
        <div class="card-body">
          <h5 class="">Centro de Diseno y Construccion</h5>
          <p class="card-text">Santa Cruz de la Sierra, Bolivia</p>
        </div>
        <div class="footer">
          <a href="http://www.arquitecturaapocaliptica.com" class="btn btn-primary" title="Arquitectura Apocaliptica" target="_blank">Visit the Website</a>
          
        </div>
      </div>

      <div class="card text-center col-sm-12 col-md-6 gallery-image img-thumbnail">
        <h5 class="card-header">Arquitectura Apocaliptica Srl</h5>
        <a href="https://carlosdvp.github.io/Apocaliptica/" data-toggle="tooltip" title="Arquitectura Apocaliptica" target="_blank">
          <img class="card-img-top rounded img-fluid img-thumbnail gallery-image" src="dist/images/Apocaliptica-2.jpg" alt="project image" id="gallery-image-1">
        </a>
        <div class="card-body">
          <h5 class="">Github Repository</h5>
          <p class="card-text">Source code and project details.</p>
        </div>
        <div class="footer">
          <a href="https://carlosdvp.github.io/Apocaliptica/" class="btn btn-primary" title="Arquitectura Apocaliptica" target="_blank">Visit the Project Repo</a>
          
        </div>
      </div>

      <div class="card text-center col-sm-12 col-md-6 gallery-image img-thumbnail">
        <h4 class="card-header">DragonBall SVG Animation</h4>
        <a href="https://carlosdvp.github.io/DBZ-Animation/" data-toggle="tooltip" title="DragonBall SVG Animation" target="_blank">
          <img class="card-img-top rounded img-fluid img-thumbnail gallery-image" src="dist/images/SVG-Animation.jpg" alt="DBZ project image" id="gallery-image-1">
        </a>
        <div class="card-body">
          <h5 class="">CSS Animations</h5>
          <p class="card-text">Animating SVG images with CSS</p>
        </div>
        <div class="footer">
          <a href="https://carlosdvp.github.io/DBZ-Animation/" class="btn btn-primary" title="DragonBall SVG Animation" target="_blank">Visit the Project</a>
          
        </div>
      </div>
    </div>

    <div class="card-deck">
      <div class="card text-center col-sm-12 col-md-6 gallery-image img-thumbnail">
        <h4 class="card-header">Responsive Portfolio</h4>
        <a href="http://carlosdvp.github.io/Responsive-Portfolio/" data-toggle="tooltip" title="Responsive Portfolio Project" target="_blank">
          <img class="card-img-top rounded img-fluid img-thumbnail gallery-image" src="dist/images/Responsive-Portfolio.jpg" alt="Responsive Portfolio Project" id="gallery-image-1">
        </a>
        <div class="card-body">
          <h5 class="">Responsive Portfolio Project</h5>
          <p class="card-text">Santa Cruz de la Sierra, Bolivia</p>
        </div>
        <div class="footer">
          <a href="http://carlosdvp.github.io/Responsive-Portfolio/" class="btn btn-primary" title="Responsive Portfolio Project" target="_blank">Visit the Project</a>
          
        </div>
      </div>

      <div class="card text-center col-sm-12 col-md-6 gallery-image img-thumbnail">
        <h4 class="card-header">Website Project 3</h4>
        <a href="https://carlosdvp.github.io/Website-project-3/" data-toggle="tooltip" title="Portfolio Project Number 3" target="_blank">
          <img class="card-img-top rounded img-fluid img-thumbnail gallery-image" src="dist/images/Website-project-3.jpg" alt="Portfolio Poject 3" id="gallery-image-1">
        </a>
        <div class="card-body">
          <h5 class="">Portfolio Website Number 3</h5>
          <p class="card-text">Falls Church, VA</p>
        </div>
        <div class="footer">
          <a href="https://carlosdvp.github.io/Website-project-3/" class="btn btn-primary" title="Portfolio Project Number 3" target="_blank">Visit the Project</a>
          
        </div>
      </div>

      <div class="card text-center col-sm-12 col-md-6 gallery-image img-thumbnail">
        <h4 class="card-header">JS Basic Chatbot Project</h4>
        <a href="https://carlosdvp.github.io/First-bot-Chatbot/" data-toggle="tooltip" title="Basic JS chatbot" target="_blank">
          <img class="card-img-top rounded img-fluid img-thumbnail gallery-image" src="dist/images/basic-chatbot.png" alt="Js chatbot Project" id="gallery-image-1">
        </a>
        <div class="card-body">
          <h5 class="">JS Project</h5>
          <p class="card-text">Basic Chatbot App written in JavaScript</p>
        </div>
        <div class="footer">
          <a href="http://carlosdvp.github.io/Udacity-Resume-Project/" class="btn btn-primary" title="Udacity Js Project" target="_blank">Visit the Project</a>
          
        </div>
      </div>
    </div>

  </div>
<!-- End of the Gallery section -->

</template>



<script>
export default {
  name: 'Gallery'
}
</script>



<style scoped>
  
.main-gallery {
  margin: 0 auto;
}

.gallery-image {
  background: rgba(12, 77, 105, .2);
}

#gallery-image-1 {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}

.card .btn {
  width: 100%;
}

.card-deck {
  margin-bottom: 2em;
  margin-top: 2em;
}
 
.img-thumbnail {
  border: 2px solid ghostwhite;
}

</style>
