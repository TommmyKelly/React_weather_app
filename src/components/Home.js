import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { getBackGround } from "../utils/getBackground";
import { connect } from "react-redux";
import ForecastItem from "./ForecastItem";
import { v4 as uuidv4 } from "uuid";
import PreLoader from "./PreLoader";
import moment from "moment";
import PropTypes from "prop-types";

import { getWeather, setBackGround } from "../actions/weatherActions";

const Home = ({
  background,
  currentWeather,
  getWeather,
  setBackGround,
  foreCastWeather,
  loading,
}) => {
  useEffect(() => {
    getWeather();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setBackGround(getBackGround(currentWeather?.weather[0].main));
    // eslint-disable-next-line
  }, [currentWeather]);

  return (
    <>
      {loading ? (
        <div>
          <PreLoader />
        </div>
      ) : (
        <>
          <div
            className='row '
            style={{
              marginTop: "30px",
              backgroundImage: `${background}`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center ,center",
              backgroundSize: "cover",
              height: "400px",
              position: "relative",
            }}
          >
            <div className='col s12 m6  banner current__weather' style={style}>
              <img
                style={{ zIndex: 10 }}
                className='responsive-img'
                src={`http://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@4x.png`}
                alt=''
              />
            </div>

            <div className='col s12 m6 banner center ' style={style}>
              <div style={{ zIndex: 10 }}>
                <span className='card-title'>
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
                <p>
                  <strong>
                    <h4>
                      Wind: {(currentWeather?.wind.speed * 2.23694).toFixed(2)}{" "}
                      MPH
                    </h4>
                  </strong>
                </p>
                <p>
                  <strong>
                    <h4>
                      Sun Rise:{" "}
                      {moment(
                        currentWeather?.sys.sunrise * 1000 +
                          currentWeather?.timezone * 1000
                      ).format("h:mm a")}{" "}
                    </h4>
                  </strong>
                </p>
                <p>
                  <strong>
                    <h4>
                      Sun Set:{" "}
                      {moment(
                        currentWeather?.sys.sunset * 1000 +
                          currentWeather?.timezone * 1000
                      ).format("h:mm a")}{" "}
                    </h4>
                  </strong>
                </p>
              </div>
            </div>
          </div>

          <div className='section'></div>
          <div className='divider'></div>
          <div className='section'></div>
          <div className='fixed-action-btn'>
            <a
              className='btn-floating btn-large blue-grey darken-3 waves-effect waves-light btn modal-trigger'
              href='#modal1'
            >
              <i className='material-icons'>search</i>
            </a>
          </div>

          <ul className='collection'>
            {foreCastWeather &&
              foreCastWeather
                .slice(0, 10)
                .map((item) => <ForecastItem key={uuidv4()} item={item} />)}
          </ul>
        </>
      )}
    </>
  );
};

Home.propTypes = {
  currentWeather: PropTypes.object.isRequired,
  foreCastWeather: PropTypes.array.isRequired,
  background: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  getWeather: PropTypes.func.isRequired,
  setBackGround: PropTypes.func.isRequired,
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
  loading: state.weather.loading,
});

export default connect(mapStateToProps, {
  getWeather,
  setBackGround,
})(Home);
