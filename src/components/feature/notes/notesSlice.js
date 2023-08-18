import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      state.push(action.payload);
    },
    noteUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingNote = state.find((note) => note.id === id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.content = content;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, noteUpdated } = notesSlice.actions;

export default notesSlice.reducer;
