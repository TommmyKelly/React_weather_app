import { combineReducers } from "redux";
// eslint-disable-next-line
import weatherReducer from "./weatherReducer";

export default combineReducers({
  weather: weatherReducer,
});
