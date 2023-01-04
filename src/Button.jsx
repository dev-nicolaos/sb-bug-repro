import React from "react";

const Button = (props) => {
  const handleClick = () => {
    console.log("Foo Bar")
  };

  return (
    <button onClick={props.handleClick || handleClick}>
      {props.children || "Hello World"}
    </button>
 );
};

export default Button;
