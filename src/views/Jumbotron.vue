
<template>

  <div>
    <header class="jumbotron">
      <h1 id="main-title">Carlos V</h1>
      <hr>
      <h3 id="sub-title">Full Stack Developer &nbsp; | &nbsp; Software Engineer</h3>
      <div id="header-intro">
        <p>Site built with Vue, Vue router, Pinia and Tailwind</p>
      </div>
    </header>
  </div>

</template>

<script setup>
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

#main-title {
  font-size: 6rem;
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
  padding: 4.5rem 0;
  background:  linear-gradient(
    rgba(0, 0, 10, .7),
    rgba(0, 0, 0, .8)
  ),
  url('../assets/pink-texture.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
}

</style>