import React from "react";

import { NUM_OF_GUESSES_ALLOWED, NUM_LETTERS } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
  if (guess.length === 0) {
    return range(NUM_LETTERS).map((i) => (
      <span key={i} className="cell"></span>
    ));
  } else {
    return guess.map((d, i) => (
      <span key={i} className={`cell ${d.status}`}>
        {d.letter}
      </span>
    ));
  }
}

function GuessResults({ results, answer, gameStatus }) {
  const gameOver =
    gameStatus === "victory" || results.length === NUM_OF_GUESSES_ALLOWED;
  // range(NUM_OF_GUESSES_ALLOWED) looks like: [0, 1, 2, 3, 4, 5]
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
          <p className="guess" key={i}>
            <Guess guess={results[i] ? results[i].value : []} />
          </p>
        ))}
      </div>
      {gameOver && gameStatus === "victory" && (
        <div className={`happy banner`}>
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {results.length > 1 ? `${results.length} guesses` : "1 guess"}
            </strong>
            .
          </p>
        </div>
      )}
      {gameOver && gameStatus !== "victory" && (
        <div className={`sad banner`}>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GuessResults;
