import { defineStore } from "pinia";
import type { AreasList } from "@/shared/interfaces/meal.interface";
import { fetchByArea, fetchGetAreas } from "@/shared/services/meal.service";

export interface AreasState {
  areas: AreasList['areas'];
  area: AreasList['area'];
  display: AreasList['display'];
}

export const useAreas = defineStore('areas', {
  state: (): AreasState => ({
    areas: [],
    area: [],
    display: false
  }),
  actions: {
    async getAreas(): Promise<void> {
      this.areas = await fetchGetAreas();
    },
    async getAreaOne(nameArea: string): Promise<void> {
      this.area = await fetchByArea(nameArea);
    }
  }
})
