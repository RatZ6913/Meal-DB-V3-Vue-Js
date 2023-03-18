<template>
  <main>
    <section class="d-flex flex-column justify-content-center">
      <h1 class="text-align-center">Voici les différents zones</h1>

      <div class="d-flex flex-row justify-content-space-around flex-wrap">
        <template v-for="getArea in mealAreas">
          <button class="btn m-10">{{ getArea.strArea }}</button>
        </template>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { Store } from 'pinia';
import { useAreas } from '../store/areasStore';

const areasStore: Store | any = useAreas();
const mealAreas = areasStore.areas.meals;

</script>

<style scoped lang="scss">
section {
  width: 60%;
  margin: auto;

  div {
    width: 80%;
    margin: 0 auto;

    button {
      width: 250px;
      background-color: var(--danger-2);
      color: var(--gray-1);
    }
  }
}
</style>
