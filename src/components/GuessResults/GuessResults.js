import React from "react";

import { NUM_OF_GUESSES_ALLOWED, NUM_LETTERS } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
  return range(NUM_LETTERS).map((i) => (
    <span key={i} className="cell">{guess[i] || ''}</span>
  ));
  // if (guess === "") {
  //   return range(NUM_LETTERS).map((i) => (
  //     <span key={i} className="cell"></span>
  //   ));
  // } else {
  //   return Array.from(guess).map((char, i) => (
  //     <span key={i} className="cell">
  //       {char}
  //     </span>
  //   ));
  // }
}

function GuessResults({ results }) {
  // console.log(range(NUM_OF_GUESSES_ALLOWED)); // [0, 1, 2, 3, 4, 5]
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <p className="guess" key={i}>
          <Guess guess={results[i] ? results[i].value : ""} />
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
