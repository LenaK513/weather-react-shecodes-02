import React from "react";
import { ActualDate } from "../ActualDate/ActualDate";
import { WeatherTemperature } from "../WeatherTemperature/WeatherTemperature";
import {
  Title,
  CityName,
  ListFirst,
  ItemList,
  Wrapper,
  ImgWrapper,
  ListSecond,
} from "./WeatherInfo.styled";
export function WeatherInfo({ info }) {
  return (
    <Title>
      <CityName>{info.city}</CityName>
      <ListFirst>
        <ItemList>
          <ActualDate date={info.date} />{" "}
        </ItemList>
        <ItemList>{info.weatherType}</ItemList>
      </ListFirst>

      <Wrapper>
        <ImgWrapper>
          <img src={info.iconUrl} alt="Cloudy" />
          <WeatherTemperature celsius={info.temperature} />
          {/* <Data>{Math.round(info.temperature)}</Data>
          <Unit>°C</Unit> */}
        </ImgWrapper>
        <ListSecond>
          <ItemList>Pressure: {info.pressure} %</ItemList>
          <ItemList>Humidity: {info.humidity} %</ItemList>
          <ItemList>Wind: {Math.round(info.wind)} km/h</ItemList>
        </ListSecond>
      </Wrapper>
    </Title>
  );
}
