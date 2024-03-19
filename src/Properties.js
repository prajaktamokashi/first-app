
import { render } from "@testing-library/react";
import React from "react";

function Properties(props) {
    return (
      <h1>Hello {props.name}</h1>
    );
  }

export default Properties;
