
import React from 'react';
import Player from './Player';
function App() {
  
  return (
    <main>
        <div id="game-container">
            {/* players list */}
            <ol id="players">
                <li><Player name="player 1" symbol="X" ></Player></li>
                <li><Player name="player 2" symbol="0" ></Player></li>
            </ol>

            {/* game board */}
            <div>

            </div>
        </div>

        {/* steps in game */}
    </main>
  )
}

export default App
