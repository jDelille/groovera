import { create } from 'zustand';

type ModalStore = {
  modals: Record<string, boolean>; 
  openModal: (modalName: string) => void; 
  closeModal: (modalName: string) => void; 
  isModalOpen: (modalName: string) => boolean;
};

const useModalStore = create<ModalStore>((set, get) => ({
  modals: {}, 

  openModal: (modalName: string) =>
    set((state) => ({
      modals: { ...state.modals, [modalName]: true }, 
    })),

  closeModal: (modalName: string) =>
    set((state) => ({
      modals: { ...state.modals, [modalName]: false },
    })),

  isModalOpen: (modalName: string) => {
    return get().modals[modalName] || false; 
  },
}));

export default useModalStore;