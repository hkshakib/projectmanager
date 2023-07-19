import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./Reducers/ProjectReducer";
import AuthReducer from "./Reducers/AuthReducer";

const Store = configureStore({
  reducer: {
    projects: ProjectSlice,
    auth: AuthReducer,
  },
});

export default Store;
