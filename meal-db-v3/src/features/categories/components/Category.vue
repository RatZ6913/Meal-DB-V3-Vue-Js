<template>
  <article class="mt-20 d-flex flex-row flex-wrap justify-content-center">
    <h2 class="text-align-center">Voice les plats de : {{ categoriesStore.nameCat }}</h2>

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
  margin: auto;

  h2 {
    width: 100%;
  }

  div {
    max-width: 150px;
    background-color: var(--gray-2);
  }
}
</style>