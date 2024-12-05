
import pb from "@/services/pocketbase";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: pb.authStore
  }),
  actions: {
    async register(authData) {
      const data = {
        "email": authData.email,
        "password": authData.password,
        "passwordConfirm": authData.passwordConfirm,
        "name": authData.name
      };

      const record = await pb.collection('users').create(data);
      await pb.collection("users").authWithPassword(authData.email, authData.password);
      this.user = pb.authStore;
      localStorage.setItem('user', this.user)
      this.router.push('/tasks');
    },
    async login(email, password) {
      await pb.collection("users").authWithPassword(email, password);
      this.user = pb.authStore;
      localStorage.setItem('user', this.user)
    },
    logout() {
      pb.authStore.clear();
      localStorage.removeItem('user');
      this.user = null;
      this.router.push('/');
    },
    isLoggedIn() {
      return pb.authStore.isValid;
    },
  }
});
