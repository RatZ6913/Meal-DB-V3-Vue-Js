import { defineStore } from "pinia";
import type { AreasList } from "@/shared/interfaces/meal.interface";
import { fetchGetAreas } from "@/shared/services/meal.service";

export interface AreasState {
  areas: AreasList[];
}

export const useAreas = defineStore('areas', {
  state: (): AreasState => ({
    areas: []
  }),
  actions: {
    async getAreas(): Promise<void> {
      this.areas = await fetchGetAreas();
    }
  }
})
