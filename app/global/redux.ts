import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  notification: false,
};

const slice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setNotification: (state, { payload }) => {
      state.notification = payload;
    },
  },
});

export const { setLoading } = slice.actions;

export default slice.reducer;
