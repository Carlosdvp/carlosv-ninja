
<template>
  <nav class="container min-w-full">
  	<a class="navbar-brand" href="/">
  		<img id="logo-navbrand" src="../assets/logo.png" alt="logo">
  		<p class="logo-text">Carlos V</p> 
  	</a>

    <input type="checkbox" id="nav-toggle">
    <label for="nav-toggle" class="burger-menu">
      <img id="burger" src="../assets/menu.svg" alt="burger icon">
    </label>

  	<div class="navbar">
  		<ul class="navbar-nav">
  			<li class="nav-item-1">
  				<router-link to="/" class="nav-link">
            Home
          </router-link>
  			</li>
  			<li class="nav-item-2">
  				<router-link to="/portfolio" class="nav-link">
            Portfolio
          </router-link>
  			</li>
  			<li class="nav-item-3">
  				<router-link to="/about" class="nav-link">
            About
          </router-link>
  			</li>
  		</ul>
  	</div>
  </nav>
</template>

<style scoped>

nav {
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

/* for the burger menu */
#nav-toggle, .burger-menu {
  display: none;
}

.navbar-brand {
  grid-column: 1;
  display: grid;
  grid-template-columns: 30% 70%;
  justify-items: start;
  align-items: center;
}

.logo-text {
	grid-column: 2;
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
  height: 50px;
}

nav a {
	color: ghostwhite;
	text-decoration: none;
	font-size: 2em;
  transition: .4s all ease-in-out;
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
  opacity: .9;
}



/* Only stick if you can fit */
@media (min-height: 300px) {
  nav ul {
    position: sticky;
    top: 0;
  }
}

/* Medium sized screens - Tablets */
@media only screen and (max-width: 799px) {
  .navbar-brand {
    grid-column: 1;
    display: grid;
    grid-template-columns: 40% 1fr 60% 1fr;
    justify-items: center;
    align-items: center;
  }

  .logo-text {
    grid-column: 3;
    margin: 0;
    padding: 0 .5em;
    font-size: .7em;
    color: firebrick;
  }

  .navbar-nav {
    display: grid;
    grid-template-columns: 1fr;
  }

  .nav-item-1 {
    grid-row: 1;
    grid-column: 1;
    padding: 1em 0;
  }

  .nav-item-2 {
    grid-row: 2;
    grid-column: 1;
    padding: 1em 0;
  }

  .nav-item-3 {
    grid-row: 3;
    grid-column: 1;
    padding: 1em 0 2em;
  }

  /* Responsive Nav Menu */
  .burger-menu, #burger {
    display: inline-block;
    width: 40px;
    grid-column: 7;
    justify-self: center;
  }
  .navbar {
    display: none;
  }
  #nav-toggle:checked ~ .navbar {
    display: grid;
    grid-row: 4;
  }

}

/* Small screens - Mobile  */
@media only screen and (max-width: 420px) {
  .navbar-brand {
    grid-column: 1;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    align-items: center;
  }

  #logo-navbrand {
    height: 40px;
  }

  .logo-text {
    grid-column: 2;
    margin: 0.3em;
    padding: 0 .5em;
    font-size: .5em;
    color: firebrick;
  }

  .nav-item-1 {
    grid-row: 1;
    grid-column: 1;
    padding: 1em 0;
  }

  .nav-item-2 {
    grid-row: 2;
    grid-column: 1;
    padding: 1em 0;
  }

  .nav-item-3 {
    grid-row: 3;
    grid-column: 1;
    padding: 1em 0 2em;
  }
}

</style>