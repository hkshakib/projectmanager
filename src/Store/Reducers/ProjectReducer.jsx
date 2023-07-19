import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    { id: "1", title: "first project", content: "dummyyyyyyyyyyyyyyyyyyyyy" },
    { id: "2", title: "second project", content: "dummyyyyyyyyyyyyyyyyyyyyy" },
    { id: "3", title: "third project", content: "dummyyyyyyyyyyyyyyyyyyyyy" },
  ],
};

const ProjectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    create: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {},
  },
});

export const { create } = ProjectSlice.actions;

export default ProjectSlice.reducer;
