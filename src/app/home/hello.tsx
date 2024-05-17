import React, { useState } from "react";

function HelloWorld() {
  const [message, setMessage] = useState("Hello, World!");

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default HelloWorld;
