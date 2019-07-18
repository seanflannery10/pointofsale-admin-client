import { LOAD_PRICES, REMOVE_PRICES } from "../actionTypes";

const message = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRICES:
      return [...action.buildings];
    case REMOVE_PRICES:
      return state.filter(buildings => buildings._id !== action.id);
    default:
      return state;
  }
};

export default message;
