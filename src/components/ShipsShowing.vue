<template>
    <div>КОРАБЛИ</div>
    <div>
      <div v-if="!loading" >
    <h1>Список кораблей</h1>
    <ul v-for="vehicle in vehicles" :key="vehicle">
      <li v-for="(vehicle,key) in vehicle" :key="key">
        <h2>{{ vehicle.title }}</h2>
        <p>{{ vehicle.description }}</p>
        <img :src="vehicle.icons.large" alt="Vehicle Icon" />
        <p>Level: {{ vehicle.level }}</p>
        <p>Type title: {{ vehicle.type.title }}</p>
        <img :src="vehicle.type.icons.default" alt="type_ico"/>
        <p>Nation: {{ vehicle.nation.name }}</p>
        <p>Nation title: {{ vehicle.nation.title }}</p>
        <p v-bind:style="{ backgroundColor: vehicle.nation.color }">Nation color: {{ vehicle.nation.color }}</p>
        <img :src="vehicle.nation.icons.small" alt="nation_ico"/>
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
