<template>
  <header>  
    <nav class="d-flex">
      <ul class="d-flex">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/categories">Categories</router-link></li>
        <li><router-link to="/areas">Areas</router-link></li>
        <li><router-link to="/meals">Meals</router-link></li>
      </ul>
    </nav>
  </header>
</template>


<script setup lang="ts">
</script>

<style scoped lang="scss">

li {
  margin: 10px;
}
</style>