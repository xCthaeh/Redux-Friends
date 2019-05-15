import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const DELETE = "DELETE";

export const deleteFriend = id => dispatch => {
  dispatch({ type: LOADING });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      dispatch({ type: DELETE, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: "Error 404: Cannot delete friend"
      });
    });
};
