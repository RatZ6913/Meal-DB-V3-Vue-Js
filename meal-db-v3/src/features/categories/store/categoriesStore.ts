import { defineStore } from "pinia";
import type { Meal } from '@/shared/interfaces/meal.interface';

export interface MealState {
  categories: Meal[];
  idMeal: Meal[];
}

export const useMeals = defineStore('meals', {
  state: (): MealState => ({
    categories: [],
    idMeal: []
  }),
});