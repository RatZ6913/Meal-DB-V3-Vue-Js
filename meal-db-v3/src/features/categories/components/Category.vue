<template>
  <article class="mt-20">
    <h2 class=".text-align-center">Voice les plats de : </h2>
    <div>
      <button></button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';

const props = defineProps({
  categoriesStore: Object as () => any,
});

watchEffect(() => {
  const mealOfCategory = props.categoriesStore.category;
  console.log(mealOfCategory);
});

</script>

<style scoped lang="scss"></style>