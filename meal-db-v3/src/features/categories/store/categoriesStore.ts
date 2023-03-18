import { defineStore } from "pinia";
import type { CategoryList } from '@/shared/interfaces/meal.interface';
import { fetchByCategory, fetchGetCategory } from "@/shared/services/meal.service";

export interface CategoryState {
  categories: CategoryList['categories'];
  category: CategoryList['category'];
  display: CategoryList['display'];
}

export const useCategories = defineStore('categories', {
  state: (): CategoryState => ({
    categories: [],
    category: [],
    display: false
  }),
  actions: {
    async getCategory(): Promise<void> {
      this.categories = await fetchGetCategory();
    },
    async getCategoryOne(categoryName: string): Promise<void> {
      this.category = await fetchByCategory(categoryName);
    },
  }
});