<template>
  <div class="container">
    <h4>Scroll menu</h4>
    <ul>
        <li @click="toPos(0)"><a>В начало</a></li>
        <li @click="toPos(0.2)"><a>20%</a></li>
        <li @click="toPos(0.4)"><a>40%</a></li>
        <li @click="toPos(0.6)"><a>60%</a></li>
        <li @click="toPos(0.8)"><a>80%</a></li>
        <li @click="toPos(1)"><a>В конец</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    toPos(value: number): void {
    const bodyHeight = document.body.scrollHeight;
    window.scrollTo({
        top: bodyHeight * value,
        behavior: 'smooth',
      });
    console.log('Высота страницы:', bodyHeight, 'пикселей');
    }
  }
});
</script>

<style scoped>
.container {
  width: 150px;
  height: 250px;
  position: fixed;
  justify-content: center;
  text-align: center;
  right: 0px;
  top: 0px;
  margin: 1rem;
  padding: 0.5rem;
  background-color: rgba(240, 248, 255, 0.555);
  color: #000;
  z-index: 1000;
}
@media screen and (max-width: 998px) {
.container {
    height: 360px;
  }
}
</style>

