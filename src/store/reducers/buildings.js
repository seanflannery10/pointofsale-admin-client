import { LOAD_BUILDING, REMOVE_BUILDING } from "../actionTypes";

const message = (state = [], action) => {
  switch (action.type) {
    case LOAD_BUILDING:
      return [...action.buildings];
    case REMOVE_BUILDING:
      return state.filter(buildings => buildings._id !== action.id);
    default:
      return state;
  }
};

export default message;
