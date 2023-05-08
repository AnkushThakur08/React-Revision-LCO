import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.value = state.value + 1;
    },

    decrementCounter: (state) => {
      state.value = state.value - 1;
    },

    incrementByValue: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export const { incrementCounter, decrementCounter, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
