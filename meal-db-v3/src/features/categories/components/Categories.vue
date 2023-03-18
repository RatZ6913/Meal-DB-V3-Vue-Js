<template>
  <main class="d-flex flex-column align-items-center">
    <section id="cat-content" class="d-flex flex-column justify-content-center">
      <h1>Voici les différents catégories</h1>
      <div class="d-flex flex-row justify-content-space-around flex-wrap">
        <template v-for="getCat in mealCategory">
          <button @click="nameOfThisCategory(getCat.strCategory)" class="btn m-10">
            {{ getCat.strCategory }}</button>
        </template>
      </div>
    </section>

    <article>
      <Category v-if="categoriesStore.display" :name-cat="categoriesStore.nameCat"/>
    </article>
  </main>
</template>

<script setup lang="ts">
import type { Store } from 'pinia';
import { useCategories } from '../store/categoriesStore';
import Category from './Category.vue';

const categoriesStore: Store | any = useCategories();
const mealCategory = categoriesStore.categories.meals;

function nameOfThisCategory(nameCat: string) {
  categoriesStore.nameCat = nameCat;
  categoriesStore.display = true;
}

</script>

<style scoped lang="scss">
#cat-content {
  width: 60%;
  margin: auto;

  h1 {
    text-align: center;
  }

  div {
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