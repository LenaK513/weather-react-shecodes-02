import React, { useState } from "react";
import axios from "axios";
// import { ActualDate } from "../ActualDate/ActualDate";
import { WeatherInfo } from "../WeatherInfo/WeatherInfo";
import { Form, SearchField, SearchBtn } from "./Weather.styled";

export function Weather({ cityForSearch }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  // const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(cityForSearch);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      weatherType: response.data.weather[0].description,
      pressure: response.data.main.pressure,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function searchCity() {
    const apiKey = "459eb898914d2b1561006ac93c82eeda";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCity();
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  if (weatherData.ready) {
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <SearchField
            type="search"
            placeholder="Enter a city"
            onChange={handleCityChange}
          />
          <SearchBtn type="button" value="Search" />
        </Form>
        <WeatherInfo info={weatherData} />
        {/* <Title>
          <CityName>{weatherData.city}</CityName>
          <ListFirst>
            <ItemList>
              <ActualDate date={weatherData.date} />{" "}
            </ItemList>
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
        </Title> */}
      </div>
    );
  } else {
    searchCity();
    return "loading.....";
  }
}
