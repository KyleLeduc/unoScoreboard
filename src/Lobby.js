import React, { Component } from 'react';
import NewPlayerForm from './NewPlayerForm';
import Player from './Player';

export default class Lobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
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
                <div>
                    <button onClick={this.props.startGame}>Start</button>
                </div>
            </div>
        )
    }
}
