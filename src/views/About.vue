<template>
  <div id="about-page">

    <div class="about-me">
      <img id="my-pic" src="../../public/images/red-knight.png">
      <p class="about-text">I am a software engineer with experience in Vue, Node, JavaScript, and CSS Grid. I have a passion for creating intuitive and functional user experiences, and have a wide range of experience working with web technologies.</p>
      <p>I have a track record of delivering robust and reliable applications, and strive to push the boundaries of what is possible with web development.</p>
    </div>

    <contactMe></contactMe>
    
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
