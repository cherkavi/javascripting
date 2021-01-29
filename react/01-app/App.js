import React from 'react';
import './index.css';
import {useState} from "react/cjs/react.production.min";
/*
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current_text: null}
    }

    render() {
        return (
            <button
                className="square"
                onClick={this.props.onClick}
            > { this.props.button_text }
            </button>
        );
    }
}*/

function Square(props){
    return (<button
            className="square"
            onClick={props.onClick}
        > { props.button_text }
        </button>)
}

class Board extends React.Component {

    constructor(properties) {
        super(properties);
        // for function style - [value, setValue] = React.useState
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
        // this.printStatus=this.printStatus.bind(this);
    }

    handleClick(index){
        console.log(`handle click ${index}`)
        const newSquares = this.state.squares.slice()
        newSquares[index]=this.state.xIsNext?'X':'0'
        this.setState((oldState, setStateMethod) => {
            return {squares: newSquares,  xIsNext: !this.state.xIsNext}
            })
    }

    renderSquare(index) {
        return <Square
                button_text={this.state.squares[index]}
                onClick={() => this.handleClick(index)}
        />;
    }

    render() {
        const status = `Next player: ${this.state.xIsNext?'X':'0'}`;
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

    printStatusOfTheBoard(){
        console.log(">>>",this.state.squares);
    }

}

class Game extends React.Component {
    constructor(properties) {
        super(properties);
        // this.board = React.createElement(Board)
        this.child = React.createRef()
        this.state = {input_field: ""}
        // don't use () => this.input_field_change
        this.input_field_change = this.input_field_change.bind(this)
    }

    printBoardStatus = ()=>{
        this.child.current.printStatusOfTheBoard();
        console.log(this.state.input_field)
    }

    input_field_change(e){
        console.log(`${e.target.value}   ${e.target.name}`)
        this.setState({ input_field: e.target.value})
        e.preventDefault();
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board ref={this.child} />
                    <button onClick={this.printBoardStatus}> board status</button>
                </div>
                <div>
                    <input name="name_for_input_field" type="text" value={this.state.input_field} onChange={this.input_field_change} />
                </div>
                <div className="game-info">
                    <div>
                        {/* status */}
                        {console.log("status")}
                    </div>
                    <ol>{/* TODO */}

                    </ol>
                </div>
            </div>
        );
    }
}

export default Game;
