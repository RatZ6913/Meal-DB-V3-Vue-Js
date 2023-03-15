import { defineStore } from "pinia";
import type { CategoryList } from '@/shared/interfaces/meal.interface';
import { fetchGetCategory } from "@/shared/services/meal.service";

export interface CategoryState {
  categories: CategoryList[];
}

export const useCategories = defineStore('categories', {
  state: (): CategoryState => ({
    categories: []
  }),
  actions: {
    async getCategory(): Promise<void> {
      this.categories = await fetchGetCategory();
    }
  }
});