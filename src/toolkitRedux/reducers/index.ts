import { combineReducers } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

const reducers = combineReducers({
  counter: CounterSlice
});

export default reducers;
