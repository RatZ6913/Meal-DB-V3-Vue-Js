<template>
  <HeaderView />
  <Suspense>
    <router-view />
  </Suspense>
  <FooterView />
</template>

<script setup lang="ts">
import HeaderView from './views/HeaderView.vue';
import FooterView from './views/FooterView.vue';

</script>

<style lang="scss">
@import './assets/style/main.scss';
</style>
