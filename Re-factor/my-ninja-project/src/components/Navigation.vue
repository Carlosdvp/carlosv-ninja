
<template>
<!-- Navbar Section -->
<nav class="container">

	<a class="navbar-brand" href="index.html">
		<img id="logo-navbrand" src="../assets/logo.png" alt="logo">
		<p class="logo-text">Carlos V</p> 
	</a>

	<div class="navbar">

		<ul class="navbar-nav">
			<li class="nav-item-1">
				<a class="nav-link" href="#title-logo">Home</a>
			</li>
			<li class="nav-item-2">
				<a class="nav-link" href="#portfolio-thumbnail">Portfolio</a>
			</li>
			<li class="nav-item-3">
				<a class="nav-link" href="#contact-info-main">Contact</a>
			</li>
		</ul>

	</div>

</nav>
<!-- End of the Navbar section -->


</template>

<script>
	
export default {
  name: 'Navigation'
}

/* eslint-disable */ 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


body {
  margin: 0;
  font-family: system-ui, sans-serif;
}

nav {
	width: 100%;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.6);
  display: grid;
  grid-template-columns: 30% 1fr 20% 1fr 20% 1fr 30% 1fr;
  grid-auto-rows: auto;
  align-items: center;
  text-align: center;
  background:  linear-gradient(
    rgba(4, 8, 8, .7),
    rgba(4, 8, 8, .9)
  ),
  url('../assets/pink-texture.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.navbar-brand {
  grid-column: 1;
  display: grid;
  grid-template-columns: 20% 1fr 80% 1fr;
  justify-items: start;
  align-items: center;
}

.logo-text {
	grid-column: 3;
	margin: 0;
	padding: 0 .5em;
	font-size: .7em;
	color: firebrick;
}

.navbar {
	grid-column: 7;
}

.navbar-nav {
	display: grid;
	grid-template-columns: 30% 30% 30%;
	grid-template-rows: auto;
}

#logo-navbrand {
	width: auto;
	margin: .2em .5em;
  grid-column: 1;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 6vh;
}

nav a {
	color: ghostwhite;
	text-decoration: none;
	font-size: 2em;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li a {
  text-decoration: none;
  font-size: 1em;
  padding: 0 1em;
}

.nav-link {
	color: firebrick;
}

.nav-link:hover {
	color: ghostwhite;
  border-left: 1px solid white;
  border-right: 1px solid white;
}



/* Only stick if you can fit */
@media (min-height: 300px) {
  nav ul {
    position: sticky;
    top: 0;
  }
}

</style>