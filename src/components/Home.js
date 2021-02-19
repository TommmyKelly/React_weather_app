import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { getBackGround } from "../utils/getBackground";
import { connect } from "react-redux";
import ForecastItem from "./ForecastItem";
import { v4 as uuidv4 } from "uuid";
import PreLoader from "./PreLoader";

import {
  getWeather,
  setBackGround,
  getForecastWeather,
} from "../actions/weatherActions";

const Home = ({
  background,
  currentWeather,
  getWeather,
  setBackGround,
  getForecastWeather,
  foreCastWeather,
}) => {
  useEffect(() => {
    getWeather();
    getForecastWeather();
  }, []);

  useEffect(() => {
    setBackGround(getBackGround(currentWeather?.weather[0].main));
  }, [currentWeather]);

  console.log(foreCastWeather);

  return (
    <>
      <PreLoader />
      <div
        className='row '
        style={{
          marginTop: "30px",
          backgroundImage: `${background}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ,center",
          backgroundSize: "cover",
          height: "300px",
          position: "relative",
        }}
      >
        <div className='col s12 m6  banner current__weather' style={style}>
          <img
            style={{ zIndex: 10 }}
            class='responsive-img'
            src={`http://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@4x.png`}
            alt=''
          />
        </div>

        <div class='col s12 m6 banner center ' style={style}>
          <div style={{ zIndex: 10 }}>
            <span class='card-title'>
              <strong>
                <h1>
                  {currentWeather?.name} {currentWeather?.sys.country}
                </h1>
              </strong>
            </span>
            <p>
              <strong>
                <h4>
                  {currentWeather?.weather[0].main}
                  {": "}
                  {currentWeather?.weather[0].description}
                </h4>
              </strong>
            </p>
            <p>
              <strong>
                <h4>Temp: {currentWeather?.main.temp} °C</h4>
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className='section'></div>
      <div className='divider'></div>
      <div className='section'></div>
      <div class='fixed-action-btn'>
        <a
          class='btn-floating btn-large blue-grey darken-3 waves-effect waves-light btn modal-trigger'
          href='#modal1'
        >
          <i className='material-icons'>search</i>
        </a>
      </div>

      <ul class='collection'>
        {foreCastWeather &&
          foreCastWeather.map((item) => (
            <ForecastItem key={uuidv4()} item={item} />
          ))}
      </ul>

      {/* <a className='waves-effect waves-light btn modal-trigger' href='#modal1'>
        <i className='material-icons'>search</i>
      </a> */}

      {/* <!-- Modal Structure --> */}
    </>
  );
};

const style = {
  color: "white",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const mapStateToProps = (state) => ({
  currentWeather: state.weather?.currentWeather,
  foreCastWeather: state.weather.forecastWeather?.list,
  background: state.weather.background,
});

export default connect(mapStateToProps, {
  getWeather,
  setBackGround,
  getForecastWeather,
})(Home);
