<template>
  <div class="home">
    <NavPan/>
  </div>
  <ShipsShowing/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavPan from '@/components/NavPan.vue'; 
import ShipsShowing from '@/components/ShipsShowing.vue';

@Options({
  components: {
    NavPan, ShipsShowing,
  },
})
export default class HomeView extends Vue {}
</script>
