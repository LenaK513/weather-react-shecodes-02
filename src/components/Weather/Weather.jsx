import React from "react";
import {
  Form,
  Title,
  Wrapper,
  SearchField,
  SearchBtn,
  CityName,
} from "./Weather.styled";

export function Weather() {
  return (
    <div>
      <Form>
        <SearchField type="search" placeholder="Enter a city" />
        <SearchBtn type="button" value="Search" />
      </Form>

      <Title>
        <CityName> Kyiv </CityName>
        <ul>
          <li>Friday</li>
          <li>Mostly Cloudy</li>
        </ul>

        <Wrapper>
          <div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png "
              alt="Cloudy"
            />
            0° C
          </div>
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity:72%</li>
            <li>Wind:13km/h</li>
          </ul>
        </Wrapper>
      </Title>
    </div>
  );
}
