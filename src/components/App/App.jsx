import React from "react";
import { Container } from "./App.styled";
import { Weather } from "../Weather/Weather";

export function App() {
  return (
    <Container>
      <Weather cityForSearch="Kyiv" />
    </Container>
  );
}
