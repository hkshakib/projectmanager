import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { DataBase } from "../../App";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const initialState = {
  projects: [],
  deletedprojects: [],
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
    const projects = querySnap.docs.map((doc) => ({
      id: doc.id,
      project: doc.data(),
    }));
    return projects;
  }
);

export const DeleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (id) => {
    const projects = await getDocs(collection(DataBase, "projects"));
    for (let project of projects.docs) {
      if (project.id === id) {
        await deleteDoc(doc(DataBase, "projects", project.id));
      }
    }
    return id;
  }
);

export const FetchDeletedProjects = createAsyncThunk(
  "projects/fetchdeletedprojects",
  async () => {
    const querySnap = await getDocs(collection(DataBase, "deletedprojects"));
    const projects = querySnap.docs.map((doc) => ({
      id: doc.id,
      project: doc.data(),
    }));
    return projects;
  }
);

// Create A ReCycle Bin of Projects for uptodate into Notifications
export const DeletedProject = createAsyncThunk(
  "projects/deletedprojects",
  async (project) => {
    const addProjectRef = await addDoc(
      collection(DataBase, "deletedprojects"),
      project
    );
    const newProject = { id: addProjectRef.id, project };
    return newProject;
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
      })
      .addCase(DeleteProject.fulfilled, (state, action) => {
        state.projects = state.projects.filter(
          (project) => project.id !== action.payload
        );
      })
      .addCase(DeletedProject.fulfilled, (state, action) => {
        state.deletedprojects.push(action.payload);
      })
      .addCase(FetchDeletedProjects.fulfilled, (state, action) => {
        state.deletedprojects = action.payload;
      });
  },
});

export default ProjectSlice.reducer;
