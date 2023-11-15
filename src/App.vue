<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ee8f58;
}

ul {
  list-style: none;
  padding: 0;

}


li {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 15px;

}

li h2 {
  margin-top: 0;
}

li img {
  max-width: 300px;
  max-height: 300px;
  display: block;
  margin-bottom: 10px;
}

li p {
  margin-bottom: 5px;
}
</style>
