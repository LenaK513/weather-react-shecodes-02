import React from "react";

export function ActualDate({ date }) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();
  return (
    <div>
      {day} {hour}:{minutes}{" "}
    </div>
  );
}
