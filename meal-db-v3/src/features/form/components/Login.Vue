<template>
  <main class="d-flex flex-column align-items-center">
    <section id="cat-content" class="d-flex flex-column justify-content-center">
      <h1 class="mb-20">Page de connexion</h1>

      <form>
        <input v-model="userStore.users.pseudo" type="text" placeholder="Pseudo..."><br>
        <input v-model="userStore.users.email" type="text" placeholder="Email..."><br>
        <input v-model="userStore.users.password" type="text" placeholder="Password..."><br>
        <input @click.submit="" type="submit">
      </form>
      <p>{{ userStore.users.pseudo }}</p>
      <p>{{ userStore.users.email }}</p>
      <p>{{ userStore.users.password }}</p>
    </section>
  </main>
</template>


<script setup lang="ts">
import { watchEffect } from 'vue';
import { useUsers } from '../stores/userStore';

const userStore: any = useUsers();

watchEffect(userStore.users);

console.log(userStore.users);


</script>


<style scoped lang="scss">
input {
  margin: 10px auto;
}
</style>