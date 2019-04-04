<template>
  <div id="about-page">

    <div class="about-me">
      <img id="my-pic" src="../../public/images/red-knight.png">
      <p class="about-text">HI, I am Carlos V, started out my journey as a Web Designer, and found my way to the land of the Front End Web Dev. I really like JS and I love Vue.js, it is the best thing since cat videos took over the internets.</p>
      <p>I also have a fascination for History, Art and AI; this last one I believe will change the world and the course of human history.</p>
    </div>

  <!-- Start Contact Section -->
    <contactMe></contactMe>
  <!-- End Contact Section -->
    
  </div>
</template>

<script>

import contactMe from '@/components/Contact.vue'

export default {
  name: 'About',
  components: {
    contactMe
  }
} 

</script>

<style scoped>
#about-page {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background-color: slategray;
}

#my-pic {
  height: 20vh;
  margin: 5em 0;
}

.about-text {
  margin: 3em auto;
}

p {
  padding-bottom: 3em;
  width: 60%;
  margin: 4em auto 9em;
  padding: 0;
  color: ghostwhite;
  text-shadow: darkslateblue 1px 1px;
  font-size: 1.3em;
}

</style>
