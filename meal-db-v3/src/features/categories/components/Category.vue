<template>
  <article class="mt-20">
    <h2>Voice les plats de : </h2>
    <div>
      <p>lorem15</p>
      <!-- <img src="@/assets/images/world.jpg" alt="image ici"> -->
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Store } from 'pinia';
import { useCategories } from '../store/categoriesStore';

const categoriesStore: Store | any = useCategories();
categoriesStore.getCategoryOne();
console.log(categoriesStore.getCategoryOne());

</script>

<style scoped lang="scss">
article {
  h2 {
    text-align: center;
  }
}
</style>