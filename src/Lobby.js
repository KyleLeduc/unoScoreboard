import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewPlayerForm from './NewPlayerForm';
import Player from './Player';

export default class Lobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winScore: 500
        };
    };

    handleChange = (evt) => {
        const { winScore, value } = evt.target;
        this.setState({
            [winScore]: value
        });
    }

    handleStartGame = () => {
        this.props.startGame(this.state)
    }

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
                    <label htmlFor='winScore'>Winning Score</label>
                    <input 
                        id='winScore' 
                        name='winScore' 
                        value={this.state.winScore} 
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <Link to='/game' onClick={this.handleStartGame}>Start</Link>
                </div>
            </div>
        )
    }
}
