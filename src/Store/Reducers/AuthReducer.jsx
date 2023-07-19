import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

const AuthReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.push(action.payload);
    },
    signup: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {},
  },
});

export const { login, signup } = AuthReducer.actions;

export default AuthReducer.reducer;
