import { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  useEffect(() => {
    //initalise materailise
    M.AutoInit();
  });
  return (
    <div className='App '>
      <NavBar />
      <div className='container'>
        <Home />
      </div>
    </div>
  );
}

export default App;
