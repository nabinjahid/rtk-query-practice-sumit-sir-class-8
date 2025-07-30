import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editeMode : false
}

const editeModeSlice = createSlice({
    name: "editeMode",
    initialState,
    reducers: {
        editeMode: (state, action) => {
            state.editeMode = action.payload
        }
    }
});

export default editeModeSlice.reducer;

export const { editeMode } = editeModeSlice.actions;
