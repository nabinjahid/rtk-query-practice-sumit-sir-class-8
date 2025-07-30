import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editepost : ""
}

const editePostSlice = createSlice({
    name: "editePost",
    initialState,
    reducers: {
        editePost: (state, action) => {
            state.editepost = action.payload
        }
    }
});

export default editePostSlice.reducer;

export const { editePost } = editePostSlice.actions;
