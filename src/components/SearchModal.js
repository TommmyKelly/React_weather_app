import React from "react";

const SearchModal = () => {
  return (
    <div>
      {/* <!-- Modal Structure --> */}
      <div id='modal1' class='modal'>
        <div class='modal-content'>
          <h4>Modal Header</h4>
          <input
            // ref={inputRef}
            type='text'
            placeholder='Search...'
            style={{ color: "gray", fontWeight: "bold" }}
          />
        </div>
        <div class='modal-footer'>
          {/* <a
            href='#!'
            class='modal-close waves-effect waves-green btn-flat'
            onClick={() => getWeather(inputRef.current.value)}
            style={modaButton}
          >
            Search
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
