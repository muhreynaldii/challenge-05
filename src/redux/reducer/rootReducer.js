import { combineReducers } from "redux";
import carReducer from "./carReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
    searchData: searchReducer,
    carID: carReducer,
});