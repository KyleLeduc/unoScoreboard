import React, { Component } from 'react'
import Player from './Player'

export default class Scoreboard extends Component {
    static defaultProps = {
        timestamp: new Date()
    };
    constructor(props) {
        super(props);
    };

    handleEndGame = () => {
        this.props.endGame(this.state);
    };
    renderPlayerList = () => {
        return this.props.players.map(player => {
            const { key, id, name, score } = player
            return  (
                <Player
                    key={key}
                    id={id}
                    name={name}
                    score={score}
                    handleEndRound={this.props.endRound}
                    buttonText='End Round'
                />
            )
        });
    };
    
    render() {
        return (
            <div>
                <h2>Scoreboard</h2>
                {this.renderPlayerList()}
                <button onClick={this.handleEndGame}>End Game</button>
            </div>
        )
    };
};
