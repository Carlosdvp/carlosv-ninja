
<template>
<!-- Contact Info Section -->
  <div id="contact-info-main" class="contact-info">

    <div class="contact-title">
      <h3> &mdash; Contact &mdash;</h3>
    </div>

  <!-- Social Icons - SVG -->
    <div id="social-icons" class="social-section">
      <a href="mailto:carlosdvp@yahoo.com?subject=Información%20sobre%20servicios" target="_blank">
        <svg class="icon-mail"><use xlink:href="#icon-mail"></use>
          <symbol id="icon-mail" viewBox="0 0 32 32">
            <title>mail</title>
            <path d="M26.667 0h-21.333c-2.934 0-5.334 2.4-5.334 5.334v21.332c0 2.936 2.4 5.334 5.334 5.334h21.333c2.934 0 5.333-2.398 5.333-5.334v-21.332c0-2.934-2.399-5.334-5.333-5.334zM26.667 4c0.25 0 0.486 0.073 0.688 0.198l-11.355 9.388-11.355-9.387c0.202-0.125 0.439-0.198 0.689-0.198h21.333zM5.334 28c-0.060 0-0.119-0.005-0.178-0.013l7.051-9.78-0.914-0.914-7.293 7.293v-19.098l12 14.512 12-14.512v19.098l-7.293-7.293-0.914 0.914 7.051 9.78c-0.058 0.008-0.117 0.013-0.177 0.013h-21.333z"></path>
          </symbol>
        </svg>
      </a>
      <a href="https://github.com/Carlosdvp" target="_blank">
        <svg class="icon-github"><use xlink:href="#icon-github"></use>
          <symbol id="icon-github" viewBox="0 0 32 32">
          <title>github</title>
          <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM25.502 25.502c-1.235 1.235-2.672 2.204-4.272 2.881-0.406 0.172-0.819 0.323-1.238 0.453v-2.398c0-1.26-0.432-2.188-1.297-2.781 0.542-0.052 1.039-0.125 1.492-0.219s0.932-0.229 1.438-0.406 0.958-0.388 1.359-0.633 0.786-0.563 1.156-0.953 0.68-0.833 0.93-1.328 0.448-1.089 0.594-1.781 0.219-1.456 0.219-2.289c0-1.615-0.526-2.99-1.578-4.125 0.479-1.25 0.427-2.609-0.156-4.078l-0.391-0.047c-0.271-0.031-0.758 0.083-1.461 0.344s-1.492 0.688-2.367 1.281c-1.24-0.344-2.526-0.516-3.859-0.516-1.344 0-2.625 0.172-3.844 0.516-0.552-0.375-1.075-0.685-1.57-0.93s-0.891-0.411-1.188-0.5-0.573-0.143-0.828-0.164-0.419-0.026-0.492-0.016-0.125 0.021-0.156 0.031c-0.583 1.479-0.635 2.839-0.156 4.078-1.052 1.135-1.578 2.51-1.578 4.125 0 0.833 0.073 1.596 0.219 2.289s0.344 1.286 0.594 1.781 0.56 0.938 0.93 1.328 0.755 0.708 1.156 0.953 0.854 0.456 1.359 0.633 0.984 0.313 1.438 0.406 0.95 0.167 1.492 0.219c-0.854 0.583-1.281 1.51-1.281 2.781v2.445c-0.472-0.14-0.937-0.306-1.394-0.5-1.6-0.677-3.037-1.646-4.272-2.881s-2.204-2.672-2.881-4.272c-0.7-1.655-1.055-3.414-1.055-5.23s0.355-3.575 1.055-5.23c0.677-1.6 1.646-3.037 2.881-4.272s2.672-2.204 4.272-2.881c1.655-0.7 3.415-1.055 5.23-1.055s3.575 0.355 5.23 1.055c1.6 0.677 3.037 1.646 4.272 2.881s2.204 2.672 2.881 4.272c0.7 1.655 1.055 3.415 1.055 5.23s-0.355 3.575-1.055 5.23c-0.677 1.6-1.646 3.037-2.881 4.272z"></path>
          </symbol>
        </svg>
      </a>
      <a href="https://twitter.com/CarlosdVP?lang=en" target="_blank">
        <svg class="icon-twitter"><use xlink:href="#icon-twitter"></use>
          <symbol id="icon-twitter" viewBox="0 0 32 32">
          <title>twitter</title>
          <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM25.195 11.284c0.009 0.203 0.014 0.408 0.014 0.614 0 6.269-4.772 13.499-13.499 13.499-2.679 0-5.173-0.785-7.273-2.132 0.371 0.044 0.749 0.066 1.132 0.066 2.223 0 4.268-0.759 5.892-2.031-2.076-0.038-3.828-1.41-4.432-3.295 0.29 0.055 0.587 0.085 0.893 0.085 0.433 0 0.852-0.058 1.25-0.166-2.17-0.436-3.806-2.354-3.806-4.652 0-0.020 0-0.040 0-0.060 0.64 0.355 1.371 0.569 2.149 0.593-1.273-0.851-2.111-2.303-2.111-3.949 0-0.869 0.234-1.684 0.642-2.385 2.34 2.87 5.836 4.759 9.779 4.957-0.081-0.347-0.123-0.709-0.123-1.081 0-2.62 2.124-4.744 4.744-4.744 1.365 0 2.598 0.576 3.463 1.498 1.081-0.213 2.096-0.608 3.013-1.151-0.354 1.108-1.107 2.038-2.086 2.625 0.96-0.115 1.874-0.37 2.725-0.747-0.636 0.951-1.44 1.787-2.367 2.456z"></path>
          </symbol>
        </svg>
      </a>
      <a href="https://www.instagram.com/carlosdgunslinger/" target="_blank">
        <svg class="icon-instagram"><use xlink:href="#icon-instagram"></use>
          <symbol id="icon-instagram" viewBox="0 0 32 32">
          <title>instagram</title>
          <path d="M26.688 0h-21.375c-2.922 0-5.313 2.391-5.313 5.313v21.375c0 2.922 2.391 5.313 5.313 5.313h21.375c2.922 0 5.313-2.391 5.313-5.313v-21.375c0-2.922-2.391-5.313-5.313-5.313zM10.244 14h11.513c0.218 0.627 0.337 1.3 0.337 2 0 3.36-2.734 6.094-6.094 6.094s-6.094-2.734-6.094-6.094c0-0.7 0.119-1.373 0.338-2zM28 14.002v11.998c0 1.1-0.9 2-2 2h-20c-1.1 0-2-0.9-2-2v-12h3.128c-0.145 0.644-0.222 1.313-0.222 2 0 5.014 4.079 9.094 9.094 9.094s9.094-4.079 9.094-9.094c0-0.687-0.077-1.356-0.222-2l3.128 0.002zM28 7c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-2c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v2z"></path>
          </symbol>
        </svg>
      </a>
    </div>

    <div class="placeholder">
      <p>cats</p>
    </div>
  </div>
<!-- End of the Contact info section -->
</template>

<script>

export default {
  name: 'ContacMe'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#contact-info-main {
  background:  linear-gradient(
    rgba(47, 79, 79, .7),
    rgba(47, 79, 79, .7)
  ),
  url('../assets/abstract-texture.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.contact-info {
  border-top: 2px solid rgba(19, 20, 21, .85);
/*   text-align: center; */
  display: grid;
  grid-template-columns: 20% 30% 30% 20%;
  grid-template-rows: 30% 50% 20%;
  grid-template-areas: 
    ". header header ."
    ". main main ."
    ". footer footer .";
}

.contact-title {
  grid-area: header;
  border-bottom: 2px solid rgba(32, 84, 135, .85);
  padding-bottom: .4em;
  font-weight: bold;
  font-size: 2em;
}

.social-section {
  grid-area: main;
  padding: 2em 0;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}

.placeholder {
  grid-area: footer;
}

.placeholder p {
  visibility: hidden;
}


/* Social Icon Styles */

.social-section a {
  display: grid;
  justify-self: center;
}

svg {
  font-size: 3em;
  padding: .5em;
}

.icon-mail:hover,
.icon-facebook:hover,
.icon-instagram:hover,
.icon-twitter:hover,
.icon-github:hover {
  color: ghostwhite;
}

#social-icons {
  background: transparent;
}

#social-icons a {
  color: rgba(36, 35, 35, .9);
}

[class^="icon-"], [class*=" icon-"] {
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

@media only screen and (max-width: 480px) {
  .contact-info {
    text-align: center;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 30% 50% 20%;
    grid-template-areas: 
      "header header header"
      ". main ."
      "footer footer footer";
  }

  .social-section a {
    display: grid;
  }

  svg {
    font-size: 2em;
    padding: .3em;
  }

}

</style>