import React, { useState } from 'react';
//                    css module example must have <component>.module.css name
import classes from './Player.module.css';

function Player ({ name: initName, symbol }) {
    const [isEditEnabled, setIsEditEnabled] = useState(false);
    const [editName, setEditName] = useState(initName);

    function buttonClick(){
        if(isEditEnabled){
            // output dynamic variable
            console.log(`new name: ${editName}`);
        }
        // update with previous state
        // postponed execution
        setIsEditEnabled( oldState => !oldState);
    }

    const buttonText = isEditEnabled ? 'Save' : 'Edit';

    // two-way-binding example
    const nameBlock=isEditEnabled ? 
        <input type="text"
                // two-way-binding: output 
               value={editName}
               defaultValue={initName}
                // two-way-binding: input 
               onChange={(e)=> setEditName(e.target.value)}
        /> : 
        <span className={classes.player_name}>{editName}</span>;
    
    //                      css module example 
    return <span className={classes.player}>
        {nameBlock}
        <span className={classes.player_symbol}>{symbol}</span>
        <button onClick={buttonClick}>{buttonText}</button>
    </span>
    ;
}  

export default Player;
