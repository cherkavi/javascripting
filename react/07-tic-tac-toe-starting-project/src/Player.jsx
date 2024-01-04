import React, { useState } from 'react';

function Player ({ name, symbol }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [editName, setEditName] = useState(name);

    function buttonClick(){
        if(isEnabled){
            console.log("new name: "+editName);
        }
        setIsEnabled( isEnabled => !isEnabled);
    }

    const buttonText = isEnabled ? 'Save' : 'Edit';

    function setNameBlock(){

    }
    
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
