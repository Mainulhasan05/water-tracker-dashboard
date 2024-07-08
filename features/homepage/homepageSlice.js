import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadHomeData } from "./homepageAPI";
const initialState = {
  status: "idle",
  message: "",
  data: null,
};

export const fetchHomeData = createAsyncThunk(
  "homepage/fetchHomeData",
  async () => {
    const response = await loadHomeData();
    return response;
  }
);

export const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      });
  },
});

export default homepageSlice.reducer;
