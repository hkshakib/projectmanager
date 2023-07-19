import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

const AuthReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const { login, signup } = AuthReducer.actions;

export default AuthReducer.reducer;
