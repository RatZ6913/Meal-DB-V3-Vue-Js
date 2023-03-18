<template>
  <article class="d-flex flex-row flex-wrap justify-content-center">
    <h2 class="text-align-center mt-20">Voice les plats de : {{ categoriesStore.nameCat }}</h2>

    <template v-for="getMeal in mealOfCategory">
      <div class="m-20 d-flex flex-wrap flex-column">
        <p>{{ getMeal.strMeal }}</p>
        <img :src="getMeal.strMealThumb">
      </div>
    </template>
  </article>
</template>

<script setup lang="ts">
import type { Meal } from '@/shared/interfaces/meal.interface';
import { ref, watchEffect } from 'vue';

const props = defineProps({
  categoriesStore: Object as () => any,
});

const mealOfCategory = ref<Meal[]>([]);

watchEffect(() => {
  mealOfCategory.value = props.categoriesStore.category.meals;
});

</script>

<style scoped lang="scss">
article {
  width: 60%;
  margin: 50px auto;
  border-top: 1px solid black;

  h2 {
    width: 100%;
  }

  div {
    justify-content: space-between;
    max-width: 150px;
    background-color: var(--danger-1);
    box-shadow: 1px 2px 2px var(--gray-3);

    &:hover {
      box-shadow: 2px 3px 2px 1px var(--gray-3);
    }

    p {
      text-align: center;
      margin: auto 0;
      padding: 5px;
      color: white;
    }

    img {
      background-color: white;
      padding: 5px;
    }
  }
}
</style>