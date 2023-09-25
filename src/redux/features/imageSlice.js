import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image : {},
    exercise : "",
    loading : false
}

const imageSlice = createSlice({
    name: 'picture',
    initialState,
    reducers: {
      loadImage: (state, action) => {
        state.image = {...action.payload}
      },
      loadExercise : (state, action) => {
        state.exercise = action.payload
      },
      openLoading : (state) => {
        state.loading = true
      },
      closeLoading : (state) => {
        state.loading = false
      }
    },
  });
  
  export const { loadImage, loadExercise, openLoading, closeLoading } = imageSlice.actions;
  
  export default imageSlice.reducer;