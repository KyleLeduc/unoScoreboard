import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewPlayerForm from './NewPlayerForm';
import GameSettingsForm from './GameSettingsForm';
import Player from './Player';

export default class Lobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winScore: 500
        };
    };

    renderPlayerList = () => {
        return this.props.gameSettings.players.map(player => {
            const { key, id, name, score } = player
            return  (
                <Player
                    key={key}
                    id={id}
                    name={name}
                    score={score}
                    handleRemove={this.props.removePlayer}
                    buttonText='X'
                />
            )
        });
    };

    render() {
        return (
            <div>
                {this.renderPlayerList()}
                <NewPlayerForm handleClick={this.props.addPlayer} />
                <GameSettingsForm 
                    winScore={this.props.gameSettings.winScore}
                    startGame={this.props.startGame}
                />
            </div>
        )
    }
}
