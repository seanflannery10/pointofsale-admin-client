import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_PRICES, REMOVE_PRICES } from "../actionTypes";

export const loadPrices = prices => ({
  type: LOAD_PRICES,
  prices
});

export const remove = id => ({
  type: REMOVE_PRICES,
  id
});

export const removePrices = id => {
  return dispatch => {
    return apiCall("delete", `/api/prices/${id}`)
      .then(() => dispatch(remove(id)))
      .catch(err => {
        addError(err.message);
      });
  };
};

export const fetchPrices = () => {
  return dispatch => {
    return apiCall("get", "/api/prices")
      .then(res => {
        dispatch(loadPrices(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const newPrice = text => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("post", `/api/prices/${id}/`, { text })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
};
