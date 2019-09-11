import React from "react";

const SpecialButton = (props) => {
  return (
    <button className = "special-button">
      {props.specialData}
    </button>
  );
};
export default SpecialButton;