import { create } from "zustand";

interface SellModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSelltModal = create<SellModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSelltModal;
