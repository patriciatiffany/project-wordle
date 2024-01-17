import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from "../../game-helpers";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [inputHistory, setInputHistory] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('')

  const addToHistory = (val) => {
    const checkedVal = checkGuess(val, answer)
    const newVal = {
      id: Date.now(),
      value: checkedVal
    }
    const newInputHistory = [...inputHistory,newVal]
    if (checkedVal.every((d) => d.status === 'correct')){
      setGameStatus('victory')
    } else if (newInputHistory.length === NUM_OF_GUESSES_ALLOWED){
      setGameStatus('loss')
    }
    setInputHistory(newInputHistory)
  }
  return <>
    <GuessInput addToHistory={addToHistory}/>
    <GuessResults results={inputHistory} gameStatus={gameStatus} answer={answer}/>
    {gameStatus === "victory" && (
        <div className={`happy banner`}>
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {inputHistory.length > 1 ? `${inputHistory.length} guesses` : "1 guess"}
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

export default Game;
