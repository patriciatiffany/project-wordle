import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from "../../game-helpers";

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
    if (checkedVal.every((d) => d.status === 'correct')){
      setGameStatus('victory')
    }
    setInputHistory([...inputHistory,newVal])
  }
  return <>
    <GuessInput addToHistory={addToHistory}/>
    <GuessResults results={inputHistory} gameStatus={gameStatus} answer={answer}/>
  </>;
}

export default Game;
