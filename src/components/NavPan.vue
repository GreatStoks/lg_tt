<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class NavPan extends Vue {

}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #6e86a7;
}
.nav {
  padding: 30px;
  font-size: 20px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #6e86a7;
}
</style>
