import AuthReducer from "./AuthReducer";
import ProjectReducer from "./ProjectReducer";
import { combineReducers } from "redux";

const RootReducer = () =>
  combineReducers({
    AuthReducer: AuthReducer,
    ProjectReducer: ProjectReducer,
  });

export default RootReducer;
