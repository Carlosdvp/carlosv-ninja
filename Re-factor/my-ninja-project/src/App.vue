<template>
  <div id="app">
    
    <Navigation></Navigation>

    <router-view />

    <FooterComponent msg="Carlos V"></FooterComponent>
    
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Jumbotron from '@/views/Jumbotron.vue'
import FooterComponent from './components/Footer-Component.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Jumbotron,
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
  padding: 0;
}

</style>
