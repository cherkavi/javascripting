import React from 'react';
import ReactDOM from 'react-dom/client';

function UserDescription({firstPart, secondPart}: any){
    return <>
            {firstPart} 
            <br />  
            {secondPart}
            <hr />
    </>
}

// root element
function App() {
    const users=[
        {name: "Uwe",  position: "Manager"},
        {name: "Karl", position: "Superviser"},
        {name: "Ivan", position: "Slave"}
    ]
    const returnValue = [];
    for(const eachUser of users){
        let namePart = <><b>Name:</b><i>{eachUser.name}</i></>
        let positionPart = <><b>Position:</b><i>{eachUser.position}</i></>
        returnValue.push( <UserDescription firstPart={namePart} secondPart={positionPart} /> );
    }
  return (
    <ul>
        {returnValue}
    </ul>
  );
}

// render root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


