// src/store/useAuthorStore.js

import { create } from "zustand";


export const useAuthorStore = create((set) => ({
  selectedAuthor: null,
  setSelectedAuthor: (author) => set({ selectedAuthor: author }),
  clearSelectedAuthor: () => set({ selectedAuthor: null }),
}));
