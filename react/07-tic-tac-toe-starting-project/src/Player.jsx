import React, { useState } from 'react';

function Player ({ name: initName, symbol }) {
    const [isEditEnabled, setIsEditEnabled] = useState(false);
    const [editName, setEditName] = useState(initName);

    function buttonClick(){
        if(isEditEnabled){
            console.log("new name: "+editName);
        }
        setIsEditEnabled( isEnabled => !isEnabled);
    }

    const buttonText = isEditEnabled ? 'Save' : 'Edit';

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
