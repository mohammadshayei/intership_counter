import * as actionTypes from "../actions/actionTypes";

const initialState = {
  dataFood: [
    {
      id: 1,
      name: "pizza",
      count: 0,
      price: 60000,
    },
    {
      id: 2,
      name: "adas polo",
      count: 0,
      price: 10000,
    },
  ],
  // subPrices:10,

};

const onIncrementHandler = (state, action) => {
  console.log('reducer counter -> onIncrementHandler');
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
  console.log('reducer counter -> onDecrementHandler');
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
  console.log('reducer counter -> reducer');

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
