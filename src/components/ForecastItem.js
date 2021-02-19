import React from "react";
import moment from "moment";

const ForecastItem = ({ item }) => {
  return (
    <li class='collection-item avatar blue-grey darken-1 white-text '>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
        alt=''
        class='circle'
        style={{ backgroundColor: "gray" }}
      />
      <span class='title '>
        {moment(item.dt * 1000).format("MMMM Do YYYY, h:mm a")}
      </span>
      <p>
        {item.weather[0].main}: {item.weather[0].description} <br /> Temp:{" "}
        {item.main.temp} °C / Feels Like {item.main.feels_like} °C
      </p>

      {/* <a href='#!' class='secondary-content'>
        <i class='material-icons'>grade</i>
      </a> */}
    </li>
  );
};

export default ForecastItem;