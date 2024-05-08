import React from "react";

const SimpleList = () => {
  const items = ["Apple", "Banana", "Orange", "Grapes"];
  console.log("testing");

  return (
    <div>
      <h2>Simple List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleList;
