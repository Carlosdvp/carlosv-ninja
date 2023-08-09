<template>
  <div class="text-center flex flex-col h-full">
    <Navigation />
    <router-view />
    <Footer msg="Carlos V" />
  </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
@import 'main.css';
</style>
