<template>
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

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}


li {
  flex: 1 1 25%;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
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


@media screen and (max-width: 998px) {
  li {
    flex: 1 1 100%;
  }

}

</style>
