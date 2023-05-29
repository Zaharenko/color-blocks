import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    addElement: (state, action) => {
      state.unshift(action.payload);
    },
    removeElement: (state) => {
      state.pop();
    },
  },
});

export const { addElement, removeElement } = listSlice.actions;

export default listSlice.reducer;
