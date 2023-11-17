<template>
    <div>КОРАБЛИ</div>
    <div>
      <div v-if="!loading" >
    <h1>Список кораблей</h1>
    <ul v-for="vehicle in vehicles" :key="vehicle">
      <li v-for="(vehicle,key) in vehicle" :key="key" v-bind:style="{ background: `linear-gradient(to left, rgba(255, 255, 255, 0) 55%, ${vehicle.nation.color} 150%, ${vehicle.nation.color} 120%)` }">
        <img :src="vehicle.nation.icons.small" alt="nation_ico" class="nation-image"/>
        <div class="nations-info__top__nation">
        <img :src="vehicle.icons.large" alt="Vehicle Icon" class="nation-info__info"/>
        </div>
        <h2>{{ vehicle.title }}</h2>

        <p>{{ vehicle.description }}</p>

        <p>Level: {{ vehicle.level }}</p>
        <p>Type title: {{ vehicle.type.title }}</p>
        <img :src="vehicle.type.icons.default" alt="type_ico"/>
        <p>Nation: {{ vehicle.nation.name }}</p>
        <div class="nations-info__top__image">
        <p class="nation-info__info">Nation title: {{ vehicle.nation.title }}</p>
        </div>
        <p v-bind:style="{ backgroundColor: vehicle.nation.color }">Nation color: {{ vehicle.nation.color }}</p>

      </li>
    </ul>

  </div>

  <div v-else>
    <p>Loading...</p>
  </div>

    </div>
  </template>
  
<script lang="ts">
import { defineComponent, ref, watch, reactive } from 'vue';
import { useQuery, UseQueryReturn } from '@vue/apollo-composable';
import gql from 'graphql-tag';
//import gqlquery from '../apollo/queries/query.graphql';
import {Vehicles} from '@/apollo/schema';
import {GET_SHIPS} from '@/apollo/queries/query';

export default defineComponent({
  
  setup() {

    var vehicles = ref<Vehicles[]>([]);
    const { result, loading } = useQuery(GET_SHIPS);

    watch(loading, (newValue, oldValue) => {
      console.log(`Значение loading изменилось: ${oldValue} -> ${newValue}`);
      vehicles.value = result.value;
    });

    return {
      loading,
      vehicles
    };

  },

})

</script>

<style scoped>
p{font-size:16px;padding:0 50px}
.nations-info{margin-top:40px}
.nations-info:hover .nation-info__wrap__inner,.nations-info:hover .nations-info__top__nation{will-change:transform;backface-visibility:hidden}
.nations-info__top{white-space:nowrap;max-height:150px}
.nations-info__top__nation{
  cursor:pointer;
  display:inline-block;
  position:relative;left:0;
  margin-left:-5%;
  filter:grayscale(20%);
  transform:translate(20%);
  transition:all .3s ease;
  max-height:inherit}
  .nations-info__top__nation:hover
  {
  filter:grayscale(20%);
  transform:scale(1.05) translateY(-25px) translateX(15%)
  }
  .nations-info__top__nation .nations-info__top__image{display:block;width:100%;-o-object-fit:contain;object-fit:contain;max-height:inherit}
  .nations-info__top__nation.active{transform:scale(1.05) translateY(-25px) translateX(15%);filter:grayscale(0)}
  .nations-info .nation-info__wrap{position:relative;height:550px;overflow:hidden}
  .nations-info .nation-info__wrap .nation-info__wrap-arrows{padding:120px 30px;display:block;position:absolute;top:50%;transform:translateY(-50%);cursor:pointer;opacity:.7;transition:opacity .3s ease-out}
  .nations-info .nation-info__wrap .nation-info__wrap-arrows:hover{opacity:1}
  .nations-info .nation-info__wrap .nation-info__wrap-arrows._left{left:1%}
  .nations-info .nation-info__wrap .nation-info__wrap-arrows._right{right:1%}
  .nations-info .nation-info__wrap .nation-info__wrap__inner{width:100%}
  .nations-info .nation-info__wrap .nation-info__wrap__inner img{position:absolute;height:130%;top:-70px;left:-4%;opacity:.5;z-index:0}
  .nations-info .nation-info__wrap .nation-info__wrap__inner ._block{text-shadow:0 0 6px #000;position:relative;z-index:1}
  .nations-info .nation-info__info-wrap{width:100%}
  .nations-info .nation-info__info{padding:40px 0;min-height:500px}
  .nations-info .nation-info__info .info__text{min-height:120px}
  .nations-info .nation-info__info .info__values
  {

  max-width:930px;margin:40px auto;text-align:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:stretch
  }
  .nations-info .nation-info__info .info__values .info__value{font-size:50px;height:80px}
  .nations-info .nation-info__info .info__values .info__value-name{font-size:18px;text-transform:uppercase}
  ._animated{position:absolute}
  .nation-image {
    position: absolute;
    background:-moz-linear-gradient(top, rgba(23,23,23,0) 0%, #171717 100%);

  }
</style>