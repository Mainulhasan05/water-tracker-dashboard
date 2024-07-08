import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGraphData } from "./homepageAPI";
const initialState = {
    status: "idle",
    message: "",
    members: [],
};

export const fetchGraphData = createAsyncThunk(
    "homepage/fetchGraphData",
    async () => {
        const response = await getGraphData();
        return response;
    }
);

const homepageSlice = createSlice({
    name: "homepage",
    initialState,
    reducers: {
        setMembers: (state, action) => {
            state.members = action.payload;
        },
    },
    extraReducers:builder=> {
        builder
            .addCase(fetchGraphData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchGraphData.fulfilled, (state, action) => {
                state.status = "idle";
                state.message = action.payload.message;
                state.members = action.payload.data;
            });
    },
});

export const { setMembers } = homepageSlice.actions;
export default homepageSlice.reducer;