import { create } from 'zustand';

interface usePageTransition {
  count: number;
  setCount: (count: number) => void;
}

export const usePageTransition = create<usePageTransition>()((set) => ({
  count: 0,
  setCount: (count: number) => set({ count }),
}));
