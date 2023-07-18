import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./Reducers/ProjectReducer";

const Store = configureStore({
  reducer: {
    projects: ProjectSlice,
  },
});

export default Store;
