import {
  GET_WEATHER,
  SEARCH_INPUT,
  SET_BACKGROUND,
  FORECAST_WEATHER,
} from "../actions/types";

const initalState = {
  currentWeather: null,
  forecastWeather: null,
  searchCity: null,
  background: "",
  loading: false,
  error: null,
};
// eslint-disable-next-line
export default (state = initalState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
        loading: false,
      };
    case FORECAST_WEATHER:
      return {
        ...state,
        forecastWeather: action.payload,
        loading: true,
      };
    case SET_BACKGROUND:
      return {
        ...state,
        background: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
