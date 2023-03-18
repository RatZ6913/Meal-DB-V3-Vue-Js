<template>
  <header>
    <nav class="d-flex align-items-center mb-20 justify-content-space-around">
      <figure>
        <img src="@/assets/images/logo.jpg" alt="logo">
      </figure>
      <ul class="d-flex">
        <router-link to="/home">Home</router-link>
        <router-link to="/categories">Categories</router-link>
        <router-link to="/areas">Areas</router-link> 
        <router-link to="/meals">Meals</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/disconnect">Disconnect</router-link>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useCategories } from '@/features/categories/store/categoriesStore';
import { useAreas } from '@/features/areas/store/areasStore'; 

const areasStore: any = useAreas();
areasStore.getAreas();

const categoriesStore: any = useCategories();
categoriesStore.getCategory();

</script>

<style scoped lang="scss">
@import '@/assets/style/main.scss';

header {
  background-color: var(--primary-2);

  nav {
    figure {
      margin: 0;
      
      img {
        vertical-align: middle;
        width: 100px;
        height: 100px;
      }
    }
    
    a {
      text-decoration: none;
      margin: 10px;
      color: white;
      &:hover {
        color: var(--gray-2);
      }
    }
  }
}
</style>