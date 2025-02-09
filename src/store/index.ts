import { create } from 'zustand';
import { StoreState } from './type';
import dashboardSlice from './slice/dashboardSlice';
import mainSlice from './slice/mainSlice';

// Create the store
const useStore = create<StoreState>((set, get) => ({
  ...dashboardSlice(set, get),
  ...mainSlice(set, get),
}));

export default useStore;
