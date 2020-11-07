import React from 'react'
import { toast } from 'react-toastify';
import Square from './Square';
class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            play: 'X',
        }
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],

        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
            play: this.state.xIsNext ? 'O' : 'X',
            disable: 1
        });

        const winner = this.calculateWinner(squares);
        console.log(winner)
        if (winner) {
            toast.success("Winner is "+winner);
            console.log("winner is "+winner);
        }
    }

    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} ></Square>
        );
    }
    render() {
        const status = "Next Play : ";
        return (
            <div className="game-view">
                <h1>Game View Run</h1>
                <div>
                    <div className="status"><p>{status}{this.state.play}</p></div>
                </div>
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
    };
}

export default Board;