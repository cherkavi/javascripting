import React, {Component} from "react";

class ValidationComponent extends Component {
    /**
     * @param properties
     *     textLength - length of the text
     */
    constructor(properties) {
        super(properties);
    }

    render() {
        const conclusion = (this.props.textLength < 5) ? "text too short" : "text long enough";
        const style=(this.props.textLength < 5) ? {} : {"fontWeight": "bold"};
        return <p> TextLength: <span style={style}>{conclusion}</span> </p>;
    }

}

// function ValidationComponent(props) {
//     // return <React.Fragment> <p>TextLength: {props.textLength}</p> </React.Fragment>
//     return <p>TextLength: <b>{props.textLength}</b></p>
// }
export default ValidationComponent;
