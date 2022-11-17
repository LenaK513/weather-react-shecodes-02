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
  ItemList,
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
          <ItemList>Friday</ItemList>
          <ItemList>Mostly Cloudy</ItemList>
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
            <ItemList>Precipitation:15%</ItemList>
            <ItemList>Humidity:72%</ItemList>
            <ItemList>Wind:13km/h</ItemList>
          </ListSecond>
        </Wrapper>
      </Title>
    </div>
  );
}
