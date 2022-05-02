
<template>
  <footer class="footer">
    <p><small><a id="main-footer-link" class="links" href="https://www.carlosv.dev" target="_blank">{{ msg }}</a>&nbsp; &copy; &nbsp;2022</small></p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>

a#main-footer-link:hover,
footer p:hover {
  color: rgba(178, 34, 34, .8);
  text-decoration: none;
}

footer a {
  color: ghostwhite;
  font-family: 'Bellefair', serif;
  letter-spacing: .2em;
  text-decoration: none;
}

footer p  {
  color: ghostwhite;
  text-align: center;
  margin: 0;
  padding: 1.5em 0;
}

footer {
  background:  linear-gradient(
    rgba(4, 8, 8, .6),
    rgba(4, 8, 8, .9)
  ),
  url('../assets/pink-texture.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border-top: 1px black solid;
}

</style>