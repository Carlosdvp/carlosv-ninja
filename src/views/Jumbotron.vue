
<template>

  <div>
  <!-- Jumbotron / Header section -->
    <header class="jumbotron">
      <h1>Carlos V</h1>
      <hr>
      <h3 id="sub-title">Web Designer &nbsp; | &nbsp; Front End Developer</h3>
      <div id="header-intro">
        <p>On this page you will find some of the things I've made, enjoy!</p>
        <p>This site was built with Vue and CSS Grid.</p>
      </div>
    </header>
  <!-- End of the Jumbotron section -->
  <!-- Start Contact Section -->
    <contactMe></contactMe>
  <!-- End Contact Section -->
  </div>

</template>

<script>

import ContactMe from '@/components/Contact.vue'

export default {
  name: 'Jumbotron',
  components: {
    ContactMe
  }
}

</script>


<style scoped>

header.jumbotron {
  margin-bottom: 0;
}

h1 {
  color: rgba(250, 250, 248, .8);
  text-shadow: 2px 2px 2px black;
  text-align: center;
  font-size: 4rem;
  padding: 4rem 0;
  font-family: 'Bellefair', serif;
  letter-spacing: 2px;
}

header hr {
  border-top: 1px solid lightsteelblue;
  width: 100%;
}

#header-intro {
  margin: 2rem;
  padding-top: 2rem;
  color: rgba(250, 250, 248, .7);
  line-height: 1.7;
  font-size: 1.3em;
}

#sub-title {
  margin: 2rem;
  padding: 1em 0;
  text-shadow: 1px 1px 1px darkslateblue;
  color: lightsteelblue;
  font-size: 1.8em;
}

.jumbotron {
  padding: 6rem 0;
  background:  linear-gradient(
    rgba(50, 100, 100, .7),
    rgba(50, 100, 100, .7)
  ),
  url('../assets/pink-texture.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}


</style>