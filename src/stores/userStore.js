import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('userData')) || null,
  }),

  actions: {
    setUser(userData) {
      this.user = userData;
      localStorage.setItem('userData', JSON.stringify(userData));
    },

    logout() {
      this.user = null;
      localStorage.removeItem('userData');
    },
  },
});
