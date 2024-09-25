import { StorageService } from '../storage';

export const localStorageImp: StorageService = {
  getItem: async (key) => {
    const item = localStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    }

    return null;
  },
  setItem: async (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async (key) => {
    localStorage.removeItem(key);
  },
};
