<template>
  <div class="home">
    <NavPan/>
    <ShipsShowing/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavPan from '@/components/NavPan.vue'; // @ is an alias to /src
import ShipsShowing from '@/components/ShipsShowing.vue';

@Options({
  components: {
    NavPan, ShipsShowing,
  },
})
export default class HomeView extends Vue {}
</script>
