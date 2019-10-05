import React from "react";
import ReactGA from "react-ga";

import "./App.css";

//Data
import portfolios from "./data/portfolio";

//Component
import { Header, Footer } from "./components/Template";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio/index";

function App() {
  ReactGA.initialize("UA-37564433-2");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">
      <div>
        <Header />
        <Portfolio portfolios={portfolios} />
        <Experience />
        <Education />
        <Footer />
      </div>
    </div>
  );
}

export default App;
