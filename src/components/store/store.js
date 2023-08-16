import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "../feature/notes/notesSlice";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
});
