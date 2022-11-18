import React, { useState } from "react";
import { Data, Unit } from "./WeatherTemperature.styled";

export function WeatherTemperature({ celsius }) {
  const [unit, setUnit] = useState("celsius");

  const changeToF = (event) => {
    event.preventDefault();
    setUnit("fahrenheit");
  };

  const changeToC = (event) => {
    event.preventDefault();
    setUnit("celsius");
  };

  if (unit === "celsius") {
    return (
      <div>
        <Data>{Math.round(celsius)}</Data>
        <Unit>
          °C |{" "}
          <a href="/" onClick={changeToF}>
            {" "}
            °F
          </a>
        </Unit>
      </div>
    );
  } else {
    let fahTemp = (celsius * 9) / 5 + 32;
    return (
      <div>
        <Data>{Math.round(fahTemp)}</Data>
        <Unit>
          <a href="/" onClick={changeToC}>
            {" "}
            °C{" "}
          </a>{" "}
          | °F
        </Unit>
      </div>
    );
  }
}
