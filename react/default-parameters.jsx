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

//                                        Double destruction
//                                               props default value
//                         props default value for no-value = true
function UserDescription({ isHuman, user: {name, position = "Unknown"} }: any){
    if (isHuman){
        return <>
                <b>Name:</b> {name}<br/>
                <i>Position:</i> {position}
                <hr />
        </>
    }else{
        return <>
                <b>Id:</b> {name}<br/>
                <i>Place:</i> {position}
                <hr />
        </>
    }
}

// root element
function App() {
    const returnValue = [];
    for(const eachUser of users){
        //                                  default valule for isHuman = true
        returnValue.push( <UserDescription  isHuman user={eachUser} /> );
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


