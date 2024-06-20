import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface GlobalStoreState {
  selected: number;
  setSelected: (index: number) => void;
  //   increase: (by: number) => void;
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
      }),
      { name: "global-store" }
    )
  )
);

export { useGlobalStore };
