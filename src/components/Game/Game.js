import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [inputHistory, setInputHistory] = React.useState([]);
  const addToHistory = (val) => {
    const newVal = {
      id: Date.now(),
      value: val
    }
    setInputHistory([...inputHistory,newVal])
  }
  return <>
    <GuessInput addToHistory={addToHistory}/>
    <GuessResults results={inputHistory}/>
  </>;
}

export default Game;
