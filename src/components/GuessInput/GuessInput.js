import React from "react";
import { NUM_LETTERS } from "../../constants";

function GuessInput({ addToHistory }) {
  const [inputVal, setInputVal] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputVal);
    addToHistory(inputVal);
    setInputVal("");
  };
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          value={inputVal}
          id="guess-input"
          onChange={(e) => setInputVal(e.target.value.toUpperCase())}
          pattern={`\\w{${NUM_LETTERS},${NUM_LETTERS}}`}
        ></input>
      </form>
    </div>
  );
}

export default GuessInput;
