import React, {useState} from "react";
import OperatorButton from "./OperatorButton";
import {operators} from "./../../../data";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [OperatorState] = useState(operators);
  return (
    <div>
      {OperatorState.map((state,index)=>
        <OperatorButton key={index} operatorData={state}/>
        )}
    </div>
  );
};
export default Operators;
