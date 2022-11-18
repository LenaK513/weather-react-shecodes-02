import React from "react";
import { Data, Unit } from "./WeatherTemperature.styled";
export function WeatherTemperature({ celsius }) {
  return (
    <div>
      <Data>{Math.round(celsius)}</Data>
      <Unit>°C</Unit>
    </div>
  );
}
