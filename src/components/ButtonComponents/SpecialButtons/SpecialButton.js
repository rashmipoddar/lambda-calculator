import React from "react";

const SpecialButton = (props) => {
  return (
    <div className="specialButtonDiv">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button specialButtons">{props.calculatorSpecialChar}</button>
    </div>
  );
};

export default SpecialButton;
