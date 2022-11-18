import React from "react";
import { ContactInfo, ContactLink } from "./Signature.styled";
export default function Signature() {
  return (
    <div>
      <ContactInfo>
        <ContactLink
          href="https://github.com/LenaK513/weather-react-shecodes-02"
          target="_blank"
          rel="noreferrer"
        >
          This project
        </ContactLink>{" "}
        was made by Olena K.{" "}
      </ContactInfo>
    </div>
  );
}
