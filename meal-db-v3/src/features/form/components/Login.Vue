<template>
  <main class="d-flex flex-column align-items-center">
    <section id="cat-content" class="d-flex flex-column justify-content-center">
      <h1 class="mb-20">Page de connexion</h1>

      <form>
        <input v-model="state.pseudo" type="text" placeholder="Pseudo..."><br>
        <input v-model="state.email" type="text" placeholder="Email..."><br>
        <input v-model="state.password" type="text" placeholder="Password..."><br>
      </form>
      <p>{{ state.pseudo }}</p>
      <p>{{ state.email }}</p>
      <p>{{ state.password }}</p>
    </section>
  </main>
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import { useUsers } from '../stores/userStore';

const userStore = useUsers();

const state = reactive<{
  users: {}
}>({
  users: {}
});

function checkIfUserExist() {

}



</script>


<style scoped lang="scss">
input {
  margin: 10px auto;
}
</style>