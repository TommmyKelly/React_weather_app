import { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import SearchModal from "./components/SearchModal";
import ScrollButton from "./components/ScrollButton";

function App() {
  useEffect(() => {
    //initalise materailise
    M.AutoInit();
  }, []);
  return (
    <Router>
      <div className='App '>
        <SearchModal />
        <NavBar />
        <ScrollButton />
        <Switch>
          <div className='container'>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
