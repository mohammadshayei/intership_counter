import * as actionTypes from "../actions/actionTypes";

const initialState = {
  dataFood: [
    {
      id: 1,
      name: "pizza",
      count: 0,
    },
    {
      id: 2,
      name: "adas polo",
      count: 0,
    },
  ],
};

const onIncrementHandler = (state, action) => {
  const newData = state.dataFood.map((food) => {
    if (food.id === action.id) {
      return { ...food, count: food.count + 1 };
    }
    return food;
  });
  return {
    ...state,
    dataFood: newData,
  };
};
const onDecrementHandler = (state, action) => {
  const newData = state.dataFood.map((food) => {
    if (food.id === action.id) {
      return food.count > 0 ? { ...food, count: food.count - 1 } : food;
    }
    return food;
  });
  return {
    ...state,
    dataFood: newData,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return onIncrementHandler(state, action);
    case actionTypes.DECREMENT:
      return onDecrementHandler(state, action);
    default:
      return state;
  }
};

export default reducer;
