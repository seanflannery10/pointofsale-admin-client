import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_BUILDING, REMOVE_BUILDING } from "../actionTypes";

export const loadBuildings = buildings => ({
  type: LOAD_BUILDING,
  buildings
});

export const remove = id => ({
  type: REMOVE_BUILDING,
  id
});

export const removeBuilding = id => {
  return dispatch => {
    return apiCall("delete", `/api/buildings/${id}`)
      .then(() => dispatch(remove(id)))
      .catch(err => {
        addError(err.message);
      });
  };
};

export const fetchBuildings = () => {
  return dispatch => {
    return apiCall("get", "/api/buildings")
      .then(res => {
        dispatch(loadBuildings(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const newBuilding = text => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("post", `/api/buildings/${id}/`, { text })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
};
