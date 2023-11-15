<template>
    <div>КОРАБЛИ</div>
    <button @click="updateVehicles">обновить</button>
    <div>
      <div v-if="!loading" >
    <h1>Список кораблей</h1>

    <!--<p :="vehicles">{{vehicles}}</p>-->
    <ul v-for="vehicle in vehicles" :key="vehicle">
      <li v-for="(vehicle,key) in vehicle" :key="key">
        <h2>{{ vehicle.title }}</h2>
        <p>{{ vehicle.description }}</p>
        <img v-if="vehicle.icons && vehicle.icons.large" :src="vehicle.icons.large" alt="Vehicle Icon" />
        <!-- Другие свойства корабля -->
        <p>Level: {{ vehicle.level }}</p>
        <p v-if="vehicle.type">Type: {{ vehicle.type.name }}</p>
        <p v-if="vehicle.nation">Nation: {{ vehicle.nation.name }}</p>
        <!-- Дополнительные данные о корабле -->
      </li>
    </ul>

  </div>
  
  <div v-else>
    <!-- Если данные еще не загружены, можно показать какой-то индикатор загрузки -->
    <p>Loading...</p>
  </div>

    </div>
  </template>
  
<script lang="ts">
import Vue from 'vue'
import { defineComponent, ref, watch, reactive } from 'vue';
import { useQuery, UseQueryReturn } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { ApolloClient } from '@apollo/client/core';
//import gqlquery from '../apollo/queries/query.graphql';
import {Vehicles} from '../apollo/schema';
import {GET_SHIPS, Vehicle} from '@/apollo/queries/query';
//import { query } from '@/query.gql';

export default defineComponent({
  data() {
    return {
       // Инициализация переменной для хранения данных о кораблях

    };
  },
  
  setup() {
    var vehicles = ref<Vehicle[]>([]);
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
  max-width: 100px;
  max-height: 100px;
  display: block;
  margin-bottom: 10px;
}

li p {
  margin-bottom: 5px;
}
</style>