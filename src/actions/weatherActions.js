import { GET_WEATHER, SET_BACKGROUND, SET_LOADING, NOT_FOUND } from "./types";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from "axios";

export const getWeather = (loc = "New York") => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: null });
    const res = await Promise.all([
      //can be axios.all either
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=metric`
      ),
      axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=metric`
      ),
    ]);

    dispatch({ type: GET_WEATHER, payload: res });

    M.toast({ html: `Updated for ${loc}` });
  } catch (error) {
    M.toast({ html: `Incorrect input. Nothing found for ${loc}` });
    dispatch({ type: NOT_FOUND });
  }
};

export const setBackGround = (imgUrl) => {
  return {
    type: SET_BACKGROUND,
    payload: imgUrl,
  };
};
