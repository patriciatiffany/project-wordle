import React from 'react';

function ResultBanner({gameStatus, numGuesses, answer}) {
  return <>
      {gameStatus === "victory" && (
        <div className={`happy banner`}>
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {numGuesses > 1 ? `${numGuesses} guesses` : "1 guess"}
            </strong>
            .
          </p>
        </div>
      )}
      {gameStatus === "loss" && (
        <div className={`sad banner`}>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
  </>;
}

export default ResultBanner;
