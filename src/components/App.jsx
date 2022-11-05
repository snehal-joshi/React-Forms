import React, { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [isSubmitted, setIsSubmitted] = useState();

  function handleChange(event) {
    setIsSubmitted(false);
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setIsSubmitted(true);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {isSubmitted && name}</h1>
      <form onSubmit={handleClick} action="">
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
