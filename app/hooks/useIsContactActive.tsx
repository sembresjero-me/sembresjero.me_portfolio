import { create } from 'zustand';

interface useIsContactActive {
  isContactActive: boolean;
  setIsContactActive: (isContactActive: boolean) => void;
}

export const useIsContactActive = create<useIsContactActive>()((set) => ({
  isContactActive: false,
  setIsContactActive: (isContactActive: boolean) => set({ isContactActive }),
}));
