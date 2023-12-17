import React from 'react';
import ReactDOM from 'react-dom/client';
import { createContext } from 'react';

interface User {
    name: string;
    position: string;
}
const users: User[] = [
    {name: "Uwe",  position: "Manager"},
    {name: "Karl", position: "Superviser"},
    {name: "Ivan", position: "Slave"}
]

// update in ContextOne will re-render the component
const ContextOne: React.Context<User> = createContext(users[0]);
// console.log(ContextOne);

class UserDescription extends React.Component<{}, {}> {
    static contextType = ContextOne;
   
    render(){
        let user:any = this.context;
        return <li> <b>Name:</b> {user.name} <b>Position:</b> {user.position} </li>
    }
} 
UserDescription.contextType = ContextOne;

function App() {
    return <ul>
        <UserDescription /> 
    </ul>
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

