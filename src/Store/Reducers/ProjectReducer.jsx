import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataBase } from "../../App";
import { addDoc, collection, getDocs } from "firebase/firestore";

const initialState = {
  projects: [],
};

export const AddProject = createAsyncThunk(
  "projects/addproject",
  async (project) => {
    const addProjectRef = await addDoc(
      collection(DataBase, "projects"),
      project
    );
    const newProject = { id: addProjectRef.id, project };
    return newProject;
  }
);

export const FetchProjects = createAsyncThunk(
  "projects/fetchprojects",
  async () => {
    const querySnap = await getDocs(collection(DataBase, "projects"));
    console.log("Yo", querySnap);
    const projects = querySnap.docs.map((doc) => ({
      id: doc.id,
      project: doc.data(),
    }));
    console.log("Hellooo: ", projects);
    return projects;
  }
);

const ProjectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddProject.fulfilled, (state, action) => {
        state.projects.push(action.payload);
      })
      .addCase(FetchProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
      });
  },
});

// export const { create } = ProjectSlice.actions;

export default ProjectSlice.reducer;
