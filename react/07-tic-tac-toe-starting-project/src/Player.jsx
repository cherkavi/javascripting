import React, { useState } from 'react';

function Player ({ name, symbol }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [editName, setEditName] = useState(name);

    function handleSave() {
        console.log("new name: "+editName);
        setIsEnabled(false);
      };

    const buttonClick = () =>
        isEnabled?handleSave():setIsEnabled(true);

    const buttonText = isEnabled ? 'Save' : 'Edit';
    
    const nameBlock=isEnabled ? 
        <input type="text"
               value={editName}
               onChange={(e)=> setEditName(e.target.value)}
        /> : 
        <span className="player-name">{editName}</span>;
    

    return <span className="player">
        {nameBlock}
      <span className="player-symbol">{symbol}</span>
      <button onClick={buttonClick}>{buttonText}</button>
    </span>
    ;
}  

export default Player;
