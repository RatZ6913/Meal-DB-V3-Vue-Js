<template>

<HeaderView />
  <router-link to="/">Home</router-link>
  <router-link to="/categories">Categories</router-link>
  <!-- <router-view></router-view> -->

  <FooterView />
</template>

<script setup lang="ts">
import HeaderView from './views/HeaderView.vue';
import FooterView from './views/FooterView.vue';

</script>


<style lang="scss">
@import './assets/style/main.scss';
</style>
