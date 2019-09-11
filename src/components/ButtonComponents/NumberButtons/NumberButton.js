import React from "react";

export const NumberButton = (props) => {
  console.log(props);
  return (
    <button>

      {props.numberData}
    </button>
  );
};
export default NumberButton;
