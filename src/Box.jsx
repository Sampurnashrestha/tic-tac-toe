import React from "react";

const Box = ({ text, onClicks }) => {
  return (
    <button onClick={onClicks} className="flex justify-center items-center size-12 border">
      {text}
    </button>
  );
};

export default Box;
