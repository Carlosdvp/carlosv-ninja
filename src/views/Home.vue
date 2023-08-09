<script setup>
</script>

<template>
  <div class="text-center flex flex-col h-full">
    <header class="jumbotron h-full mb-0">
      <h1
        class="text-white p-16 bg-opacity-80 tracking-wider">
        Carlos V
      </h1>
      <hr class="w-full border-t-2 border-[#B0C4DE]">
      <h3
        class="text-2xl m-8 py-[2em] text-[#B0C4DE] shadow-sm text-[1.8em]">
        Full Stack Developer &nbsp; | &nbsp; Software Engineer
      </h3>
      <div
        class="m-8 pt-8 text-opacity-70 leading-[1.7] text-2xl text-[#B0C4DE]">
        <p>
          Site built with Vue, Vue router, Pinia and Tailwind
        </p>
      </div>
    </header>
  </div>
</template>

<style scoped>
h1 {
  text-shadow: 2px 2px 2px black;
  font-family: 'Bellefair', serif;
  font-size: 6rem;
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
}

</style>