import React from 'react';
import logo from './logo.svg';

function Game() {
  return (
    <div className="Game">
      <header className="Game-header">
        <img src={logo} className="Game-logo" alt="logo" />
        <p>
          This is where the magic happens.
          No, seriously.
        </p>
      </header>
    </div>
  );
}

export default Game;