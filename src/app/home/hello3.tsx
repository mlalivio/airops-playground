import React, { useState } from "react";

function HelloWorld3() {
  const [message, setMessage] = useState("Hello, World!");
  console.log("test");

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

export default HelloWorld3;
