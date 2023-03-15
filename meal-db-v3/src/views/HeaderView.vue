<template>
  <header>
    <nav class="d-flex align-items-center mb-20">
      <figure>
        <img src="@/assets/images/logo.jpg" alt="logo">
      </figure>
      <ul class="d-flex">
        <router-link to="/home">Home</router-link>
        <router-link to="/categories">Categories</router-link>
        <router-link to="/areas">Areas</router-link>
        <router-link to="/meals">Meals</router-link>
        <a>Connexion</a>
        <a>Inscription</a>
        <a>Déconnexion</a>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import '@/assets/style/main.scss';

header {
  background-color: var(--primary-2);

  nav {
    justify-content: space-around;

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