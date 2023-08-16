import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "First Notes", content: "lorem ipsum dolor sit amet" },
];

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;
