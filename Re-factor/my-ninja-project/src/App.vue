<template>
  <div id="app">
    
    <Navigation></Navigation>

    <img alt="Vue logo" src="./assets/logo.png">

    <HelloWorld msg="I want All the Things!!!"/>

    <contactMe></contactMe>

    <FooterComponent msg="Carlos V"></FooterComponent>
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import HelloWorld from './components/HelloWorld.vue'
import ContactMe from './components/Contact.vue'
import FooterComponent from './components/Footer-Component.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    HelloWorld,
    ContactMe,
    FooterComponent
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

body {
  background-color: lightsteelblue;
  color: ghostwhite;
  margin: 0;
}

</style>
