import { configureStore, createSlice } from '@reduxjs/toolkit';

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 100,
  //   initialState: { value: 100 },
  reducers: {
    increment(state, action) {
      return state + action.payload;
      //   state.value + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});
// console.log(myValueSlice);
export const { increment, decrement } = myValueSlice.actions;

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = itemsSlice.actions;

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
  },
});
