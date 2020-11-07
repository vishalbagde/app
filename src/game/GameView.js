import React from 'react'
import Board from './Board'

class GameView extends React.Component {
    render() {
        return (
            <div className="game-board">
                <Board />
            </div>
        );

    }
}

export default GameView;