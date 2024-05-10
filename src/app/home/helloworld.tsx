import React, { useState } from "react";

function HelloWorld() {
  const [greetings, setGreetings] = useState([
    "Hello, World!",
    "Hola, Mundo!",
    "Bonjour, le Monde!",
  ]);
  const [newGreeting, setNewGreeting] = useState("");

  const handleAddGreeting = () => {
    setGreetings([...greetings, newGreeting]);
    setNewGreeting("");
  };

  return (
    <div>
      <ul>
        {greetings.map((greeting, index) => (
          <li key={index}>{greeting}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newGreeting}
        onChange={(e) => setNewGreeting(e.target.value)}
        placeholder="Add new greeting"
      />
      <button onClick={handleAddGreeting}>Add Greeting</button>
    </div>
  );
}

export default HelloWorld;
