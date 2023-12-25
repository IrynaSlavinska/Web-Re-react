import { createSlice } from '@reduxjs/toolkit';

export const clickSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0 },
  reducers: {
    update(state, action) {
      state.value += action.payload;
    },

    // update(state) {
    //   state.value += 1;
    // },
  },
});

export const { update } = clickSlice.actions;
// console.log(update);

export const getClicksValue = state => state.clicks.value;
