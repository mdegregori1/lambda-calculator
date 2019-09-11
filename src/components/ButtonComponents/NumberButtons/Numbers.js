import React, {useState} from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);
  // console.log('NumberState', numberState);
  return (
    <div>
      {numberState.map((data, index) => (
        <NumberButton key={index} numberData ={data} />
      ))}
       
    </div>
  );
};
export default Numbers; 
//data is value of the element in the array 
