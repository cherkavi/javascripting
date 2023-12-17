import React from 'react';
import ReactDOM from 'react-dom/client';

// avoid error like: 
// Property 'name' does not exist on type 'Readonly<{}>' 
class UserDescription extends React.Component<{name:string, position:string}, {}> {
    render(){
        // console.debug("value:" + this.props)
        return <li> Name: {this.props.name} Position: {this.props.position} </li>
    }
} 

// avoid error like: 
// Parameter 'props' implicitly has an 'any' type error
// function AnotherDescription(props:any){
function AnotherDescription({name, position}:any){
    return <li>. Name: {name} Position: {position} </li>
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
        returnValue.push( <UserDescription {...eachUser} /> );
        returnValue.push( <AnotherDescription name={eachUser.name} position={eachUser.position} /> )
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

