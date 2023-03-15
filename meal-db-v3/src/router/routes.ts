import type { RouteRecordRaw } from "vue-router";
import HomePage from '../features/home/components/HomePage.vue';
import Categories from '../features/categories/components/Categories.vue';
import Areas from '../features/areas/components/Areas.vue';
import Meals from '../components/Meals.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/:home?', component: HomePage },
  { path: '/categories', component: Categories },
  { path: '/areas', component: Areas },
  { path: '/meals', component: Meals }
];
