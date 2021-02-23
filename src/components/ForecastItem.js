import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const ForecastItem = ({ item }) => {
  return (
    <li className='collection-item avatar blue-grey darken-1 white-text center'>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
        alt=''
        className='circle'
        style={{ backgroundColor: "gray" }}
      />
      <span className='title '>
        {moment(item.dt * 1000).format("MMMM Do YYYY, h:mm a")}
      </span>
      <p>
        {item.weather[0].main}: {item.weather[0].description} <br /> Temp:{" "}
        {item.main.temp} °C / Feels Like {item.main.feels_like} °C <br /> Wind:{" "}
        {(item.wind.speed * 2.23694).toFixed(2)} MPH
      </p>

      {/* <a href='#!' class='secondary-content'>
        <i class='material-icons'>grade</i>
      </a> */}
    </li>
  );
};

ForecastItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ForecastItem;
