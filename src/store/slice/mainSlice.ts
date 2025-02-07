import { StateCreator } from "zustand";
import { MainSlice } from "../type";

const mainSlice: StateCreator<MainSlice> = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
});

export default mainSlice;