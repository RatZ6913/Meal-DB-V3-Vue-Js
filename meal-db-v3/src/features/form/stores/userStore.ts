import { defineStore } from "pinia";
import type { UserInterface } from "@/shared/interfaces/user.interface";

export interface UserState {
  users: UserInterface['users'];
}

export const useUsers = defineStore('users', {
  state: (): UserState => ({
    users: {
      pseudo: null,
      email: null,
      password: null
    },
  }),
  actions: {
    // async checkUserInfos(): Promise<void> {
    //   this.users = await checkIfUserExist();
    // },
  },
})
