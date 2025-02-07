import { StateCreator } from "zustand";
import { DashboardSlice } from "../type";

const dashboardSlice: StateCreator<DashboardSlice> = (set) => ({
  isMenuOpen: false,
  setMenuOpen: (open: boolean) => set({ isMenuOpen: open }),
});

export default dashboardSlice;
