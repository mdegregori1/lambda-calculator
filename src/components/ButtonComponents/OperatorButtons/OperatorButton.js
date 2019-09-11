import React from "react";


export const OperatorButton = (props) => {
  return (
    <button className = "operator-buttons">
      {props.operatorData.char}
    </button>
  );
};
export default OperatorButton;


