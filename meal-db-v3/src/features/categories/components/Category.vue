<template>
  <article class="mt-20">
    <h2 class=".text-align-center">Voice les plats de : </h2>
    <div>
      <p>{{ nameCat }}</p>
      <!-- <img src="@/assets/images/world.jpg" alt="image ici"> -->
    </div>
  </article>
</template>

<script setup lang="ts">

const props = defineProps({
  nameCat: {
    type: String,
    required: true,
  },
});


</script>

<style scoped lang="scss">

</style>