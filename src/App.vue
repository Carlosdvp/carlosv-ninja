<template>
  <Navigation />
  <router-view/>
  <FooterComponent msg="Carlos V" />
</template>

<script>
import Navigation from './components/Navigation.vue'
import FooterComponent from './components/Footer-Component.vue'

export default {
  name: 'app',
  components: {
    Navigation,
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
  height: 100vh;
}

body {
  background-color: lightsteelblue;
  color: ghostwhite;
  margin: 0;
  padding: 0;
}

</style>
