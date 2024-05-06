import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterSliceState {
  value: number;
}

const initialState: CounterSliceState = {
  value: 0
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    },
    reset(state) {
      state.value = 0;
    }
  }
});

export const { increment, decrement, reset } = CounterSlice.actions;

export default CounterSlice.reducer;
