import { createStore } from "redux";

// Action Generator - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const resetCount = () => ({
    type: "RESET"
});

const setCount = ({ count = 101 } = {}) => ({
    type: "SET",
    count
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + action.incrementBy,
        };
      case "DECREMENT":
        return {
          count: state.count - action.decrementBy,
        };
      case "SET":
        return {
          count: action.count,
        };
      case "RESET":
        return {
          count: 0,
        };
      default:
        return state;
    }
  }

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - than an object that gets sent to the store
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({ count: 500 }));
store.dispatch(setCount({ count: 500 }));
store.dispatch(setCount());
