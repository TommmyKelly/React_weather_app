import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { getBackGround } from "../utils/getBackground";

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [backGround, setBackGround] = useState("");
  const inputRef = useRef(null);

  const getWeather = async (loc = "Gowran") => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=metric`
      );

      setCurrentWeather(res.data);
      setBackGround(getBackGround(res.data.weather[0].main));
      M.toast({ html: `Updated for ${loc}` });
      inputRef.current.value = "";
    } catch (error) {
      console.log(error.message);
      M.toast({ html: `Incorrect input. Nothing found for ${loc}` });
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      <div
        className='row '
        style={{
          marginTop: "30px",
          backgroundImage: `${backGround}`,
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
                <h1>{currentWeather?.name}</h1>
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

      <ul class='collection'>
        <li class='collection-item avatar blue-grey darken-1 white-text '>
          <img
            src={`http://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@4x.png`}
            alt=''
            class='circle'
            style={{ backgroundColor: "gray" }}
          />
          <span class='title '>Title</span>
          <p>
            First Line <br /> Second Line
          </p>

          <a href='#!' class='secondary-content'>
            <i class='material-icons'>grade</i>
          </a>
        </li>
      </ul>

      {/* <!-- Modal Structure --> */}
      <div id='modal1' class='modal'>
        <div class='modal-content'>
          <h4>Modal Header</h4>
          <input
            ref={inputRef}
            type='text'
            placeholder='Search...'
            style={{ color: "gray", fontWeight: "bold" }}
            ref={inputRef}
          />
        </div>
        <div class='modal-footer'>
          <a
            href='#!'
            class='modal-close waves-effect waves-green btn-flat'
            onClick={() => getWeather(inputRef.current.value)}
            style={modaButton}
          >
            Search
          </a>
        </div>
      </div>
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

const modaButton = {
  backgroundColor: "#26A69A",
  color: "white",
};

export default Home;
