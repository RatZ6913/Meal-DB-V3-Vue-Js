import { defineStore } from "pinia";
import type { CategoryList } from '@/shared/interfaces/meal.interface';
import { fetchGetCategory } from "@/shared/services/meal.service";

export interface CategoryState {
  categories: CategoryList[];
  display: boolean;
}

export const useCategories = defineStore('categories', {
  state: (): CategoryState => ({
    categories: [],
    display: false
  }),
  actions: {
    async getCategory(): Promise<void> {
      this.categories = await fetchGetCategory();
    }
  }
});