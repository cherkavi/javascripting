import React, {Component} from "react";

class UserOutput extends Component {
    constructor(properties) {
        super(properties);
        this.componentStyle={
            color: "blue"
        }
    }

    render() {
        return <React.Fragment>
            <p style={this.componentStyle}>{this.props.username ? this.props.username : "unknown"}</p>
            <p>{this.props.text_2 ? this.props.text_2 : "......."}</p>
        </React.Fragment>
    }
}

export default UserOutput;
