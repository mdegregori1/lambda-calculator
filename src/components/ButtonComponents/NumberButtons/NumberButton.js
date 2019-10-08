import React from "react";

export const NumberButton = (props) => {
  console.log(props);
  return (
    <button className = "number-buttons">

      {props.numberData}
    </button>
  );
};
export default NumberButton;
