import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  Title,
  Wrapper,
  SearchField,
  SearchBtn,
  CityName,
  ListFirst,
  ListSecond,
  ItemList,
  ImgWrapper,
  Data,
  Unit,
} from "./Weather.styled";

export function Weather({ cityForSearch }) {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: "Friday 00.00",
      humidity: response.data.main.humidity,
      weatherType: response.data.weather[0].description,
      pressure: response.data.main.pressure,
    });
    setLoading(true);
  }

  if (loading) {
    return (
      <div>
        <Form>
          <SearchField type="search" placeholder="Enter a city" />
          <SearchBtn type="button" value="Search" />
        </Form>

        <Title>
          <CityName>{weatherData.city}</CityName>
          <ListFirst>
            <ItemList>{weatherData.date} </ItemList>
            <ItemList>{weatherData.weatherType}</ItemList>
          </ListFirst>

          <Wrapper>
            <ImgWrapper>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png "
                alt="Cloudy"
              />
              <Data>{Math.round(weatherData.temperature)}</Data>
              <Unit>°C</Unit>
            </ImgWrapper>
            <ListSecond>
              <ItemList>Pressure: {weatherData.pressure} %</ItemList>
              <ItemList>Humidity: {weatherData.humidity} %</ItemList>
              <ItemList>Wind: {Math.round(weatherData.wind)} km/h</ItemList>
            </ListSecond>
          </Wrapper>
        </Title>
      </div>
    );
  } else {
    const apiKey = "459eb898914d2b1561006ac93c82eeda";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityForSearch}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading.....";
  }
}
