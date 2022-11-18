import React from "react";
import { ActualDate } from "../ActualDate/ActualDate";
import {
  Title,
  CityName,
  ListFirst,
  ItemList,
  Wrapper,
  ImgWrapper,
  Data,
  Unit,
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
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png "
            alt="Cloudy"
          />
          <Data>{Math.round(info.temperature)}</Data>
          <Unit>°C</Unit>
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
