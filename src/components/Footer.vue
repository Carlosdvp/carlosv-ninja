
<template>
  <footer
    class="mt-auto py-6 border-t-2 border-black">
    <p class="text-white no-underline">
      <small>
        <a          
          href="https://www.carlosv.dev"
          class="hover:text-[firebrick] tracking-wide"
          target="_blank">
          {{ msg }}
        </a>
        &nbsp; &copy; &nbsp;2023
      </small>
    </p>
  </footer>
</template>

<script setup>
const props = defineProps({
  msg: String
});
</script>

<style scoped>
a {
  font-family: 'Bellefair', serif;
  letter-spacing: .2em;
}

footer {
  background:  linear-gradient(
    rgba(4, 8, 8, .7),
    rgba(0, 8, 8, 1)
  );
  background-repeat: no-repeat;
  background-size: cover;
}
</style>