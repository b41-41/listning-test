import create from 'zustand';

type LoginStoreState = {
  isLogin: boolean;
  updateLoginState: () => void;
};

export const loginStore = create<LoginStoreState>((set) => ({
  isLogin: false,
  updateLoginState() {
    set((state) => ({ isLogin: !state.isLogin }));
  },
}));
