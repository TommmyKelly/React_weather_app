import { GET_WEATHER, SET_BACKGROUND, FORECAST_WEATHER } from "./types";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from "axios";

export const getWeather = (loc = "Gowran") => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=metric`
    );
    dispatch({ type: GET_WEATHER, payload: res.data });
    //setBackGround(getBackGround(res.data.weather[0].main));
    M.toast({ html: `Updated for ${loc}` });
  } catch (error) {
    M.toast({ html: `Incorrect input. Nothing found for ${loc}` });
  }
};

export const getForecastWeather = (loc = "Gowran") => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=metric`
    );
    dispatch({ type: FORECAST_WEATHER, payload: res.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const setBackGround = (imgUrl) => {
  return {
    type: SET_BACKGROUND,
    payload: imgUrl,
  };
};
