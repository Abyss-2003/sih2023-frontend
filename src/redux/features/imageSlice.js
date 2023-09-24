import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image : {},
    exercise : "",
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
      }
    },
  });
  
  export const { loadImage, loadExercise } = imageSlice.actions;
  
  export default imageSlice.reducer;