export type DashboardSlice = {
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export type MainSlice = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export type StoreState = DashboardSlice & MainSlice;
