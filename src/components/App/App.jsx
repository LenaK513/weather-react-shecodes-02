import React from "react";
import { Container } from "./App.styled";
import { Weather } from "../Weather/Weather";
import Signature from "../Signature/Signature";

export function App() {
  return (
    <Container>
      <Weather cityForSearch="Dnipro" />
      <Signature />
    </Container>
  );
}
