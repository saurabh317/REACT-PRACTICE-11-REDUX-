// import { legacy_createStore as createStore } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showDiv: true,
};

const counterSlice =  createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showDiv = !state.showDiv;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showDiv: state.showDiv,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showDiv: state.showDiv,
//     };
//   }

//   if (action.type === "decrease") {
//     return {
//       counter: state.counter - action.amount,
//       showDiv: state.showDiv,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showDiv: !state.showDiv,
//     };
//   }
//   return state;
// };

const store = configureStore({
    reducer:counterSlice.reducer

});

export const counterActions = counterSlice.actions;


export default store; 
