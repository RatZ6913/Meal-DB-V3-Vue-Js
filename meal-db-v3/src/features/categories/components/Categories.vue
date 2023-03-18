<template>
  <main>
    <section id="cat-content" class="d-flex flex-column justify-content-center">
      <h1>Voici les différents catégories</h1>
      <div>
        <template v-for="getCat in mealCategory">
          <button @click="categoriesStore.display = true" class="btn m-10"> {{ getCat.strCategory }}</button>
        </template>
      </div>
    </section>

    <section>
      <Category v-if="categoriesStore.display"/>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { Store } from 'pinia';
import { useCategories } from '../store/categoriesStore';
import Category  from './Category.vue';

const categoriesStore: Store | any = useCategories();
categoriesStore.getCategory();
const mealCategory = categoriesStore.categories.meals;


</script>

<style scoped lang="scss">
#cat-content {
  width: 60%;
  margin: auto;

  h1 {
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;

    button {
      width: 250px;
      background-color: var(--gray-3);
      color: white;
    }
  }
}
</style>