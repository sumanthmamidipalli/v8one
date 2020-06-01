import React from "react";
import "./App.css";
import "./Mediaqueries.css";
import Header from "./components/Header";
import Line from "./components/Line";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <div className="headercontainer">
        <Header />
      </div>

      <Line />
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default App;
