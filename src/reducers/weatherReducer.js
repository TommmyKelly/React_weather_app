import {
  GET_WEATHER,
  SEARCH_INPUT,
  SET_BACKGROUND,
  FORECAST_WEATHER,
  SET_LOADING,
  NOT_FOUND,
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
        loading: false,
      };
    case SET_BACKGROUND:
      return {
        ...state,
        background: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case NOT_FOUND:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
