import create from 'zustand';

type LoginStoreState = {
  isLogin: boolean;
  updateLogin: () => void;
};

const loginStore = create<LoginStoreState>((set) => ({
  isLogin: false,
  updateLogin() {
    set((state) => ({ isLogin: !state.isLogin }));
  },
}));

export default loginStore;
