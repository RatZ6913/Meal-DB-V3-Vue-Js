import type { RouteRecordRaw } from "vue-router";
import HomePage from '../components/HomePage.vue';
import Categories from '../components/Categories.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage },
  { path: '/a', component: Categories }
];


