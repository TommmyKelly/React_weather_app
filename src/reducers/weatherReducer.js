import {
  GET_WEATHER,
  SET_BACKGROUND,
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
  initialSearch: true,
};
// eslint-disable-next-line
export default (state = initalState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        currentWeather: action.payload[0].data,
        forecastWeather: action.payload[1].data,
        loading: false,
        initialSearch: false,
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
