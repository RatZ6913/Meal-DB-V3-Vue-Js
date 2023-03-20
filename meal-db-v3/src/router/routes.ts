import type { RouteRecordRaw } from "vue-router";
import HomePage from '../views/HomePage.vue';
import Categories from '../features/categories/components/Categories.vue';
import Areas from '../features/areas/components/Areas.vue';
import Meals from '../components/Meals.vue';
import Login from '../features/form/components/Login.vue';
import Disconnect from '../components/Disconnect.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/:home?', component: HomePage },
  { path: '/categories', component: Categories },
  { path: '/areas', component: Areas },
  { path: '/meals', component: Meals },
  { path: '/login', component: Login },
  { path: '/disconnect', component: Disconnect }
];
