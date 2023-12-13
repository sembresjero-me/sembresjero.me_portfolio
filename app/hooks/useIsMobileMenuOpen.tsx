import { create } from 'zustand';

interface useIsMobileMenuOpen {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}

export const useIsMobileMenuOpen = create<useIsMobileMenuOpen>()((set) => ({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => set({ isMobileMenuOpen }),
}));
