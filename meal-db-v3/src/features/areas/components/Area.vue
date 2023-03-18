<template>
  <article class="d-flex flex-row flex-wrap justify-content-center">
    <h2 class="text-align-center mt-20">Voice les plats de : {{ areasStore.nameArea }}</h2>
    <template v-for="getMeal in mealByArea">
      <!-- <p>{{ getMeal.strArea }}</p> -->
    </template>
  </article>
</template>

<script setup lang="ts">
import type { Meal } from '@/shared/interfaces/meal.interface';
import { ref, watchEffect } from 'vue';

const props = defineProps({
  areasStore: Object as () => any,
});

const mealByArea = ref<Meal[]>([]);

watchEffect(() => {
  mealByArea.value = props.areasStore.areas.meals;
  console.log(mealByArea);

});

</script>

<style scoped lang="scss"></style>