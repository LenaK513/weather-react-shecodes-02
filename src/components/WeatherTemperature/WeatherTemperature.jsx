import React, { useState } from "react";
import { Data, Unit, Link } from "./WeatherTemperature.styled";

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
          <Link href="/" onClick={changeToF}>
            {" "}
            °F
          </Link>
        </Unit>
      </div>
    );
  } else {
    let fahTemp = (celsius * 9) / 5 + 32;
    return (
      <div>
        <Data>{Math.round(fahTemp)}</Data>
        <Unit>
          <Link href="/" onClick={changeToC}>
            {" "}
            °C{" "}
          </Link>{" "}
          | °F
        </Unit>
      </div>
    );
  }
}
