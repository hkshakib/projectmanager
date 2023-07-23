import { configureStore } from "@reduxjs/toolkit";

import ProjectReducer from "./Reducers/ProjectReducer";
import AuthReducer from "./Reducers/AuthReducer";

const Store = configureStore({
  reducer: {
    projects: ProjectReducer,
    auth: AuthReducer,
  },
});

export default Store;
