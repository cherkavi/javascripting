import React, { useState } from 'react';

function Player ({ name: initName, symbol }) {
    const [isEditEnabled, setIsEditEnabled] = useState(false);
    const [editName, setEditName] = useState(initName);

    function buttonClick(){
        if(isEditEnabled){
            // output dynamic variable
            console.log(`new name: ${editName}`);
        }
        setIsEditEnabled( oldState => !oldState);
    }

    const buttonText = isEditEnabled ? 'Save' : 'Edit';

    // two-way-binding example
    const nameBlock=isEditEnabled ? 
        <input type="text"
               value={editName}
               defaultValue={initName}
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
