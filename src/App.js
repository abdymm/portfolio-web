import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Data
import portfolios from "./data/portfolio";

//Component
import { Header, Footer } from "./components/Template";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Portfolio portfolios={portfolios}/>
        <Experience />
        <Education />
        <Footer />
      </div>
    </div>
  );
}

export default App;
