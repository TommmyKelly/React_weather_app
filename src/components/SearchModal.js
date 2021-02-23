import React, { useRef } from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions/weatherActions";
import PropTypes from "prop-types";

const SearchModal = ({ getWeather }) => {
  const inputRef = useRef(null);

  const updateWeather = () => {
    if (inputRef.current.value === "") return;
    getWeather(inputRef.current.value);

    inputRef.current.value = "";
  };

  return (
    <div>
      {/* <!-- Modal Structure --> */}
      <div id='modal1' className='modal'>
        <div className='modal-content'>
          <h4>Location Search</h4>
          <input
            ref={inputRef}
            type='text'
            placeholder='Search...'
            style={{ color: "gray", fontWeight: "bold" }}
          />
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            className='modal-close waves-effect waves-green btn-flat'
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

SearchModal.propTyes = {
  getWeather: PropTypes.func.isRequired,
};

const modaButton = {
  backgroundColor: "#26A69A",
  color: "white",
};

export default connect(null, { getWeather })(SearchModal);
