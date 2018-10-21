
<template>

<!-- Jumbotron / Header section -->
  <header class="jumbotron">
    <h1>Carlos V</h1>
    <hr>
    <h3 id="sub-title">Web Designer &nbsp; | &nbsp; Front End Developer</h3>
    <p id="header-intro">Hey there! I'm Carlos V, a Web Designer and Front End Developer who calls the world his home. On this page you will find some of the things I've made, enjoy!</p>
  </header>
<!-- End of the Jumbotron section -->

</template>

<script>

export default {
  name: 'Jumbotron'
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