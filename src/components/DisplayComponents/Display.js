import React from "react";

const Display = (props) => {
  // const [ displayCharacter, setDisplayCharacter ] = useState(0);
  // console.log(props.changeDisplay);

  return <div className="display">{props.displayCharacter}</div>;
};

export default Display;