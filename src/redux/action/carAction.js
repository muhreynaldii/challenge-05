import axios from "axios";
import { GET_CARS_ID } from "../types";

export const getCar = (id) => {
  return (dispatch) => {
    dispatch({ type: `${GET_CARS_ID}_LOADING` });

    axios({
      method: "GET",
      url: `https://rent-cars-api.herokuapp.com/admin/car/${id}`,
    })
      .then((response) => {
        dispatch({
          type: `${GET_CARS_ID}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_CARS_ID}_ERROR`,
          error: error.massage,
        });
      });
  };
};
