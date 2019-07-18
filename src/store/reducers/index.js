import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import buildings from "./buildings";
import prices from "./prices";

const rootReducer = combineReducers({
  currentUser,
  errors,
  buildings,
  prices
});

export default rootReducer;
