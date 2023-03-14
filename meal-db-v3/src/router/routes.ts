import type { RouteRecordRaw } from "vue-router";
import HomePage from '../components/HomePage.vue';
import Categories from '../components/Categories.vue';
import Areas from '../components/Areas.vue';
import Meals from '../components/Meals.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage },
  { path: '/categories', component: Categories },
  { path: '/areas', component: Areas },
  { path: '/meals', component: Meals }
];
