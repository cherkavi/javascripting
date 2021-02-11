import React from "react";
import './App.css';
import UserOutput from "./UserOutput";
import UserInput from "./UserInput";


function App() {
    // functional component state using
    const [firstUser, setFirstUser] = React.useState("first user")

    function changeFirstUser(newNameForUser){
        setFirstUser(newNameForUser)
    }

    return <React.Fragment>
        <UserInput changeListener={changeFirstUser} username={firstUser} />
        <UserOutput username={firstUser} />
        <UserOutput username="user#2" />
        <UserOutput username="user#3" />
    </React.Fragment>
}

export default App;
