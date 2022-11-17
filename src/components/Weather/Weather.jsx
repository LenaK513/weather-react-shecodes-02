import React from "react";
import {
  Form,
  Title,
  Wrapper,
  SearchField,
  SearchBtn,
  CityName,
  ListFirst,
  ListSecond,
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
        <ListFirst>
          <li>Friday</li>
          <li>Mostly Cloudy</li>
        </ListFirst>

        <Wrapper>
          <div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png "
              alt="Cloudy"
            />
            0° C
          </div>
          <ListSecond>
            <li>Precipitation:15%</li>
            <li>Humidity:72%</li>
            <li>Wind:13km/h</li>
          </ListSecond>
        </Wrapper>
      </Title>
    </div>
  );
}
