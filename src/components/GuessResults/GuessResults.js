import React from "react";

function GuessResults({ results }) {
  return (
    <div class="guess-results">
      {results.map((d) => (
        <p class="guess" key={d.id} data-id={d.id}>
          {d.value}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
