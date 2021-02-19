import React, { useRef } from "react";
import { connect } from "react-redux";
import { getWeather, getForecastWeather } from "../actions/weatherActions";

const SearchModal = ({ getWeather, getForecastWeather }) => {
  const inputRef = useRef(null);

  const updateWeather = () => {
    getWeather(inputRef.current.value);
    getForecastWeather(inputRef.current.value);
  };

  return (
    <div>
      {/* <!-- Modal Structure --> */}
      <div id='modal1' class='modal'>
        <div class='modal-content'>
          <h4>Loacation Search</h4>
          <input
            ref={inputRef}
            type='text'
            placeholder='Search...'
            style={{ color: "gray", fontWeight: "bold" }}
          />
        </div>
        <div class='modal-footer'>
          <a
            href='#!'
            class='modal-close waves-effect waves-green btn-flat'
            onClick={updateWeather}
            style={modaButton}
          >
            Search
          </a>
        </div>
      </div>
    </div>
  );
};

const modaButton = {
  backgroundColor: "#26A69A",
  color: "white",
};

export default connect(null, { getWeather, getForecastWeather })(SearchModal);
