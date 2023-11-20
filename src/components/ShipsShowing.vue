<template>
    <div v-if="!loading" >
      <h1>Список кораблей</h1>
      <div class="sort_container">
        <h3>Sort by:</h3>
        <button @click="sortByLevel" class="sortbtn">Уровень</button>
        <button @click="sortByNation" class="sortbtn">Нация</button>
        <button @click="sortByType" class="sortbtn">Тип</button>
      </div>
      <div class="page-content" ref="pageContent">
        <ul>
          <li v-for="vehicle in sortedVehicles" :key="vehicle.title" v-bind:style="{ background: `linear-gradient(to left, rgba(255, 255, 255, 0) 55%, ${vehicle.nation.color} 150%, ${vehicle.nation.color} 120%)` }">

          <img :src="vehicle.nation.icons.small" alt="nation_ico" class="nation-image"/>
          <div class="nations-info__top__nation">
            <img :src="vehicle.icons.large" alt="Vehicle Icon" class="nation-info__info"/>
          </div>
          <h2>{{ vehicle.title }}</h2>
          <div class="description-container" v-bind:class="{ expanded: vehicle.showFullDescription }">
            <p @click="show_decription(vehicle)" class="initial-text">{{ vehicle.description }}</p>
          </div>
          <button v-if="!vehicle.showFullDescription" @click="show_decription(vehicle)" id="toggle_desc"></button>
          <div class="type-type__pos">
            <p>Level: {{ vehicle.level }}</p>
            <div class="type-type"><img :src="vehicle.type.icons.default" alt="type_ico"/>Type: {{ vehicle.type.title }}</div>
            <div class="nations-info__top__image">
              <p class="nation-info__info">{{ vehicle.nation.title }}</p>
            </div>
          </div>

          </li>
        </ul>
      </div>
      <win-scroll/>
    </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref, watch} from 'vue';
import { useQuery } from '@vue/apollo-composable';
import {Vehicles} from '@/apollo/schema';
import {GET_SHIPS} from '@/apollo/queries/query';
import WinScroll from '@/components/WinScroll.vue';

export default defineComponent({

setup() {

  var vehicles = ref<Vehicles[]>([]);
  var targetArray: any[] = [];
  const { result, loading } = useQuery(GET_SHIPS);
  
  watch(loading, () => {
    vehicles.value = result.value.vehicles;
  });

  return {
    loading,
    vehicles,
    targetArray,
  };
},

components: {
  WinScroll,
},

computed: {
  sortedVehicles(): Vehicles[] {
    return this.vehicles;
  },
},

methods: {
  show_decription(vehicle: any) {
    vehicle.showFullDescription = !vehicle.showFullDescription;
  },
  sortByLevel() {
    this.vehicles.sort((a, b) => a.level - b.level);
  },
  sortByNation() {
    this.vehicles.sort((a, b) => a.nation.title.localeCompare(b.nation.name));
  },
  sortByType() {
    this.vehicles.sort((a, b) => a.type.name.localeCompare(b.type.name));
  },
},

});

</script>

<style scoped>
p{
font-size:16px;padding:0 50px;

}
.nations-info{margin-top:40px}
.nations-info:hover .nation-info__wrap__inner,.nations-info:hover .nations-info__top__nation{will-change:transform;backface-visibility:hidden}
.nations-info__top{white-space:nowrap;max-height:150px}
.nations-info__top__nation{
cursor:pointer;
display:inline-block;
position:relative;left:0;
margin-left:-25%;
filter:grayscale(20%);
transform:translate(20%);
transition:all .3s ease;
max-height:inherit}
.nations-info__top__nation:hover
{
filter:grayscale(20%);
transform:scale(1.05) translateY(-25px) translateX(15%)
}
.nations-info .nation-info__info .info__values
{
max-width:930px;margin:40px auto;text-align:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:stretch
}

.nation-image {
position: absolute;
background:-moz-linear-gradient(top, rgba(23,23,23,0) 0%, #171717 100%);
}
.ype-type {
display: flex;
flex-direction:row-reverse;
justify-content: flex-end;
padding: 5px;
margin: 5px;
font-size: 18px;
}
.type-type__pos {
display: flex;
flex-direction: column;
justify-content: flex-end;
}
.description-container {
position: relative;
max-height: 100px;
overflow: hidden;
background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #bec2c94f 120%);
}

.description-container.expanded {
max-height: none;
background: none;

}
p .initial-text {
margin: 0;
padding-bottom: 30px;
background: radial-gradient(circle, rgba(199,201,205,1) 6%, rgba(4,31,70,0) 70%); 
}
.sortbtn {
margin: 0.5rem;
background-color: transparent;
border: 2px solid #1e4270;
border-radius: 5px;
border-image: linear-gradient(to left top,#adf2f7 10%,  transparent 30%, transparent 70%, #adf2f7 90%);
border-image-slice: 1;
color: #e6e7e9;
padding: 10px 20px;
font-size: 16px;
cursor: pointer;
transition: all 0.2s ease;
outline: none;
position: relative;
overflow: hidden;
z-index: 1;
}
.sortbtn::before {
content: "";
position: absolute;
top: 0;
left: -20px;
width: 0;
height: 0;
border-style: solid;
border-width: 50px 20px 50px 0;
border-color: transparent #6e86a7 transparent transparent;
transition: all 0.2s ease;
z-index: -1;
}
.sortbtn:hover::before {
left: 0;
}
.sortbtn:hover {
color: #000000; 
background-color: #6e86a7; 
border: 2px solid #f3652d;
border-image: linear-gradient(to left bottom ,#adf2f7 10%,  transparent 50%, transparent 70%, #adf2f7 100%);
border-image-slice: 1;
}
.sort_container {
display: flex;
justify-content: flex-start;
margin: 1rem;
padding: 5px;
}

</style>