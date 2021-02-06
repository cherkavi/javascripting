import React, {Component} from "react";

class CharComponent extends Component {
    /**
     * @param properties with:
     * letter, charIndex, removeChar
     *
     */
    constructor(properties) {
        super(properties);
        this.style = {
            "display": "inline-block",
            "padding": "16px",
            "textAlign": "center",
            "margin": "16px",
            "border": "1px solid black"
        }
    }

    render() {
        // apply styles from JS object
        // return <div onClick={()=>this.props.removeChar(this.props.charIndex)} style={this.style}>{this.props.letter}</div>;
        // index will be inserted in function
        return <div onClick={this.props.removeChar} style={this.style}>{this.props.letter}</div>;

        // apply styles from css by name
        // import './CharComponent.css'
        // return <div className="charComponentStyle">{this.props.letter}</div>;

        // apply styles from css
        // create-react !!!
        // import styles from './CharComponent.css'
        // console.log(styles.charComponentStyle)
        // console.log(styles)
        // return <div className={styles.charComponentStyle}>{this.props.letter}</div>;

    }
}

export default CharComponent;
