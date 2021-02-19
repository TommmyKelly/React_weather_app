import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

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
      getBackGroung(res.data.weather[0].main);
      M.toast({ html: `Updated for ${loc}` });
      inputRef.current.value = "";
    } catch (error) {
      console.log(error.message);
      M.toast({ html: `Incorrect input. Nothing found for ${loc}` });
    }
  };

  const getBackGroung = (con) => {
    console.log(con);
    switch (con) {
      case "Clouds":
        setBackGround(
          'url("https://images.unsplash.com/photo-1469365556835-3da3db4c253b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdWR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
        );
        break;
      case "Clear":
        setBackGround(
          'url("https://images.unsplash.com/photo-1567787782997-319ae6cf2edc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTJ8fGNsZWFyJTIwd2VhdGhlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
        );
        break;
      case "Snow":
        setBackGround(
          'url("https://images.unsplash.com/photo-1519944159858-806d435dc86b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3clMjB3ZWF0aGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
        );
        break;
      case "Rain":
        setBackGround(
          'url("https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1347&q=80")'
        );
        break;
      case "Drizzle":
        setBackGround(
          'url("https://images.pexels.com/photos/5706239/pexels-photo-5706239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'
        );
        break;
      case "Thunderstorm":
        setBackGround(
          'url("https://images.unsplash.com/photo-1561485132-59468cd0b553?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bmRlcnN0b3JtfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
        );
        break;

      default:
        setBackGround(
          'url("https://images.unsplash.com/photo-1583268023358-47edee5723eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTg2fHx3ZWF0aGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
        );
        return;
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

      <div class='row'>
        <div class='col s12' style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div class='card blue-grey darken-1'>
            <div class='card-content white-text'>
              {/* <span class='card-title'>Card Title</span> */}
              <input
                type='text'
                placeholder='Search...'
                style={{ color: "white", fontWeight: "bold" }}
                ref={inputRef}
              />
              <a
                class='waves-effect waves-light btn'
                onClick={() => getWeather(inputRef.current.value)}
              >
                <i class='large material-icons'>search</i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <ul class='collection'>
        <li class='collection-item avatar blue-grey darken-1 white-text '>
          <img
            src={`http://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@4x.png`}
            alt=''
            class='circle'
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

export default Home;
