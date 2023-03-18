<template>
  <main>
    <section id="container">
      <h1>Bievenue sur Meals</h1>
      <img src="@/assets/images/bg-image.jpg">
    </section>

    <div id="box-meal" v-if="state.display = true">
      <button class="btn btn-primary" @click="random()">Générer un plat aléatoire</button>
      <template v-for="meal in state.randomMeal">
        <template v-for="infoMeal in meal">
          <p>{{ infoMeal.strMeal }}</p>
          <img :src="infoMeal.strMealThumb">
        </template>
      </template>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { RandomMeal } from '@/shared/interfaces/meal.interface';
import { fetchRandomMeal } from '@/shared/services/meal.service';
import { reactive } from 'vue';

const state = reactive<{
  randomMeal: RandomMeal | Function;
  display: boolean;
}>({
  randomMeal: Function,
  display: false
})

async function random(): Promise<void> {
  state.randomMeal = await fetchRandomMeal();
  state.display = true;
}

</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;

  #container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    img {
      width: 35rem;
      height: 35rem;
    }
  }

  #box-meal {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;

    img {
      width: 250px;
      height: 250px;
    }
  }
}
</style>