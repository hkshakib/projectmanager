import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

const AuthReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveUser } = AuthReducer.actions;

export default AuthReducer.reducer;
