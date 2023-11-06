<template>
    <div>КОРАБЛИ</div>
    <div>
      <!--<button @click="fetchData">Запрос GraphQL</button> -->
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>
      <div v-for="item in data?.items || []" :key="item.id">{{ item.name }}</div>
    </div>
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

  const GET_DATA = gql`
    {
        vehicles {
            title
        description
        icons {
            large
            medium
        }
        level
        type {
            name
    	    title
            icons {
                default
            }
        }
        nation {
            name
            title
            color
            icons {
                small
                medium
                large
            }
        }
    }
}
  `;
  
  export default defineComponent({
  setup() {
    const { result, loading } = useQuery(GET_DATA);

    const fetchData = async () => {
        await result.value();
    };

    return {
        data: result,
        loading,
        fetchData,
    };
  },
});
  </script>