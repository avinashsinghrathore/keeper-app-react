import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createNote = createAsyncThunk(
  "createNote",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://64dd0092e64a8525a0f77c5d.mockapi.io/todo",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userNote = createSlice({
  name: "userNote",
  initialState: {
    notes: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createNote.pending]: (state) => {
      state.loading = true;
    },
    [createNote.fulfilled]: (state, action) => {
      state.loading = false;
      state.notes.push(action.payload);
    },
    [createNote.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default userNote.reducer;
