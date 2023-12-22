import React from 'react';
import ReactDOM from 'react-dom/client';

interface User{
    name: string,
    position: string;
}
const users = [
    {name: "Uwe",  position: "Manager"},
    {name: "Karl", position: undefined },
    {name: "Ivan", position: "Slave"}
]

// Double destruction
// Default parameter
function UserDescription({ user: {name, position = "Unknown"} }: any){
    return <>
            <b>Name:</b> {name}<br/>
            <i>Position:</i> {position}
            <hr />
    </>
}

// root element
function App() {
    const returnValue = [];
    for(const eachUser of users){
        returnValue.push( <UserDescription   user={eachUser} /> );
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


