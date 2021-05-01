import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Player from './Player'

export default class Scoreboard extends Component {
    static defaultProps = {
        timestamp: new Date()
    };
    constructor(props) {
        super(props);
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
                <Link to='/' onClick={this.props.endGame}>End Game</Link>
            </div>
        )
    };
};
