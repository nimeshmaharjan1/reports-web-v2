import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface GlobalStoreState {
  selected: number;
  setSelected: (index: number) => void;
  //   increase: (by: number) => void;
  showSidebar: boolean;
  setShowSidebar: (v: boolean) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

const useGlobalStore = create<GlobalStoreState>()(
  devtools(
    persist(
      (set) => ({
        selected: 0,
        // increase: (by) => set((state) => ({ bears: state.selected + by })),
        setSelected: (index) =>
          set(() => ({
            selected: index,
          })),
        showSidebar: false,
        setShowSidebar: (v) =>
          set(() => ({
            showSidebar: v,
          })),
        toggleSidebar: () =>
          set((state) => ({
            showSidebar: !state.showSidebar,
          })),
        closeSidebar: () =>
          set(() => ({
            showSidebar: false,
          })),
      }),
      { name: "global-store" }
    )
  )
);

export { useGlobalStore };
