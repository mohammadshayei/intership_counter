import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  data: [
    {
      id: 1,
      name: "pizza",
      count: 0,
    },
  ],
};

const incrementHandler = (state, action) => {
  return;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return incrementHandler(state, action);
    default:
      return state;
  }
};

export default reducer;
