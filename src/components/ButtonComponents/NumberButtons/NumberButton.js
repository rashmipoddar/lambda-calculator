import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button numberButtons" onClick = { () =>  props.numberCallback(props.calculatorNumber) }>{props.calculatorNumber}</button>
    </>
  );
};

export default NumberButton;