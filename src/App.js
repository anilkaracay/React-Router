import React, { useState, useEffect } from "react";

import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Private from "./Private";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isAgreement, setIsAgreement] = useState(false);
  useEffect(() => {
    const isAgreementFromLocalStorage = localStorage.getItem("isAgreement");
    setIsAgreement(isAgreementFromLocalStorage);
  }, []);
  return (
    <Router>
      <div className="App">
        <Nav isAgreement={isAgreement} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route
            path="/about"
            component={() => <About setIsAgreement={setIsAgreement} />}
          />
          <Route
            path="/private"
            component={() =>
              isAgreement !== "false" ? (
                <Private isAgreement={isAgreement} />
              ) : (
                <Home />
              )
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
