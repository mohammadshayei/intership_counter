import * as actionTypes from "../actions/actionTypes";

const initialState = {
  dataFood: [
    {
      id: 1,
      name: "pizza",
      count: 0,
      price: 85000,
    },
    {
      id: 2,
      name: "adas polo",
      count: 0,
      price: 15000,
    },
    {
      id: 3,
      name: "lazania",
      count: 0,
      price: 65000,
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
const onAddRecord = (state, action) => {
  return {
    ...state,
    dataFood: [
      ...state.dataFood,
      {
        id: state.dataFood.length+1,
        name: action.name,
        price: action.price,
        count: 0,
      },
    ],
  };
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return onIncrementHandler(state, action);
    case actionTypes.DECREMENT:
      return onDecrementHandler(state, action);
    case actionTypes.ADD_RECORD:
      return onAddRecord(state, action);
    default:
      return state;
  }
};

export default reducer;
