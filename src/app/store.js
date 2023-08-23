import { configureStore } from "@reduxjs/toolkit";
import userNote from "../features/userNoteSlice";

export const store = configureStore({
  reducer: {
    app: userNote,
  },
});
