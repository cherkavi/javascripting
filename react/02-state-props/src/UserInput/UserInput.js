import React, {Component} from "react";

class UserInput extends Component {

    constructor(properties) {
        super(properties);
        this.componentStyle={
            color: "red",
            backgroundColor: "yellow"
        }
    }

    render() {
        return <input style={this.componentStyle} value={this.props.username} onChange={(event)=>this.props.changeListener(event.target.value)}/>;
    }

}

export default UserInput;
