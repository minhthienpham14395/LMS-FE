// Auth slice for state management
export interface AuthState {
  isLoggedIn: boolean;
  user: { email: string } | null;
}

const initialState: AuthState = {
  isLoggedIn: localStorage.getItem('brightkids_userEmail') !== null,
  user: localStorage.getItem('brightkids_userEmail') ? { email: localStorage.getItem('brightkids_userEmail')! } : null,
};

export const authSlice = {
  name: 'auth',
  initialState,
  reducers: {
    login: (state: AuthState, action: { payload: { email: string } }) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem('brightkids_userEmail', action.payload.email);
    },
    logout: (state: AuthState) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('brightkids_userEmail');
    },
  },
};