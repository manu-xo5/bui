import * as React from "react";
import Checkbox from "./components/Checkbox";

export default function App({ ...props }) {
  return (
    <>
      <Checkbox
        label={
          <span
            style={{
              borderRadius: "5px",
              display: "inline-block",
              padding: ".25rem 1rem",
              backgroundColor: "rgba(0,0,0,.1)",
              border: ".1rem solid grey",
            }}
          >
            Screen Guard
          </span>
        }
      />
      <Checkbox label="Back Cover" />
      <Checkbox label="Headphone" />
    </>
  );
}
