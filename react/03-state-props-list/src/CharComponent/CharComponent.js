import React, {Component} from "react";
import styled from 'styled-components'
import styleClasses from './CharComponent.css'

const StyledDiv = styled.div`
    display: inline-block;
    padding: 16px;
    text-align: center;
    margin: 16px;
    border: 1px solid black;
    // pseudo declaration is unique
    &:hover {
      color: ${props => props.highlightSelected ? props.highlightSelected : 'red' };
    }
`

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
        // --------------
        // apply styles from JS object
        // return <div onClick={()=>this.props.removeChar(this.props.charIndex)} style={this.style}>{this.props.letter}</div>;
        // index will be inserted in function
        // return <div onClick={this.props.removeChar} style={this.style}>{this.props.letter}</div>;

        // --------------
        // apply styles from css by name
        // import './CharComponent.css'
        // return <div className="charComponentStyle">{this.props.letter}</div>;

        // --------------
        // apply styles from css
        // npm run eject
        // change file: webpack.config.dev.js
        // {loader: require.resolve('css-loader'),
        //  options: { importLoaders: 1, modules: true, localIdentName: '[name]__[local]__[hash:base64:5]'}
        //  }
        // import styles from './CharComponent.css'
        // console.log(styles)
        return <div key={this.props.keyValue} onClick={()=>this.props.removeChar(this.props.keyValue)} className={styleClasses.charComponentStyle}>{this.props.letter}</div>;

        // --------------
        // return <StyledDiv key={this.props.key} highlightSelected={(this.props.customProperty)? this.props.customProperty : "aqua"}
        //             onClick={this.props.removeChar}
        //             style={this.style}>{this.props.letter}</StyledDiv>;

    }
}

export default CharComponent;
