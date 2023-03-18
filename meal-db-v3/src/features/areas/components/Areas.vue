<template>
  <main class="d-flex flex-column align-items-center">
    <section id="area-content" class="d-flex flex-column justify-content-center">
      <h1 class="text-align-center">Voici les différents zones</h1>

      <div class="d-flex flex-row justify-content-space-around flex-wrap">
        <template v-for="getArea in mealAreas">
          <button 
            @click="nameOfThisArea(getArea.strArea)" 
            class="btn m-10">{{ getArea.strArea }}</button>
        </template>
      </div>
    </section>
    
    <article>
      <Area v-if="areasStore.display" :areasStore="areasStore"/>
    </article>
  </main>
</template>

<script setup lang="ts">
import { useAreas } from '../store/areasStore';
import Area from './Area.vue';

const areasStore: any = useAreas();
const mealAreas = areasStore.areas.meals;

function nameOfThisArea(nameArea: string): void {
  areasStore.nameArea = nameArea;
  areasStore.display = true;
  areasStore.getAreaOne(nameArea);
}

</script>

<style scoped lang="scss">
#area-content {
  width: 60%;
  margin: auto;

  div {
    width: 80%;
    margin: 0 auto;

    button {
      width: 250px;
      color: var(--gray-1);
      background-color: var(--gray-3);
      &:nth-child(odd){
        background-color: #316f7d;
      }
      &:hover {
        background-color: var(--primary-1);
        color: var(--gray-1);
      }
    }
  }
}
</style>
