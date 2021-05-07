import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewPlayerForm from './NewPlayerForm';
import GameSettingsForm from './GameSettingsForm';
import Player from './Player';
import './Lobby.css';

export default class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winScore: 500,
    };
  }

  renderPlayerList = () => {
    return this.props.gameSettings.players.map(player => {
      const { key, id, name, score } = player;
      return (
        <Player
          key={key}
          id={id}
          name={name}
          score={score}
          handleRemove={this.props.removePlayer}
          buttonText="X"
          playing={this.props.playing}
        />
      );
    });
  };

  render() {
    return (
      <div className="Lobby-wrap">
        <div className="Lobby">
          <h1>Uno Score Tracker</h1>
          <GameSettingsForm
            winScore={this.props.gameSettings.winScore}
            startGame={this.props.startGame}
          />
          <NewPlayerForm handleClick={this.props.addPlayer} />
          {this.renderPlayerList()}

          <Link
            className="Lobby-startGame"
            to="/game"
            onClick={() => this.props.startGame(this.state)}>
            Start Game
          </Link>
        </div>
      </div>
    );
  }
}
