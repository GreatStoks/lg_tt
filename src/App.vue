<template>
  <nav>
    <router-link to="/">Home</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #bec2c9;
  background: linear-gradient(180deg, rgba(3,11,22,1) 36%, rgba(4,31,70,1) 79%);

}

body {
  border:0;
  margin:0;
  padding:0
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
