import React, { Fragment } from "react";

const About = () => {
  return (
    <>
      <div style={style} className='center'>
        <h1>Version 1.0.0</h1>
      </div>
      <div style={style} className='center'>
        <u>
          <h3>Instructions.</h3>
        </u>
        <p style={{ fontSize: "2rem" }}>
          To search for a city simply press the search button on the bottom
          right hand corner of the homepage. If your search result is showing
          with a different country code. Then just do another search with the
          country code included like this example.{" "}
          <strong> New York, US</strong> don't forget to put a comma exactly
          after the city.
        </p>
      </div>
    </>
  );
};

const style = {
  marginTop: "20px",
  color: "#26A69A",
};

export default About;
