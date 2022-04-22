import { GET_SEARCH } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_SEARCH}_LOADING`:
      return {
        ...state,
      };
    case `${GET_SEARCH}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_SEARCH}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
