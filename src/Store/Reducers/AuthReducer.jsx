import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  IsLoading: false,
  error: null,
};

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (uid) => {
    const firestore = getFirestore();
    const userDocRef = doc(firestore, "users", uid);
    const userDocSnapshot = await getDoc(userDocRef);
    if (userDocSnapshot.exists()) {
      return userDocSnapshot.data();
    } else {
      throw new Error("User data not found");
    }
  }
);

export const fetchUserDataByUID = createAsyncThunk(
  "user/fetchUserDataByUID",
  async (uid) => {
    const firestore = getFirestore();
    const userDocRef = doc(firestore, "users", uid);

    try {
      const userDocSnapshot = await getDoc(userDocRef);
      if (userDocSnapshot.exists()) {
        return userDocSnapshot.data();
      } else {
        throw new Error("User data not found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
);

const AuthReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchUserData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchUserDataByUID.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUserDataByUID.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUserDataByUID.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { saveUser } = AuthReducer.actions;

export default AuthReducer.reducer;
