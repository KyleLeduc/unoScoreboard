import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewPlayerForm from './NewPlayerForm';
import GameSettingsForm from './GameSettingsForm';
import Player from './Player';
import './Lobby.css';

export default class Lobby extends Component {

  renderPlayerList = () => {
    return this.props.gameSettings.players.map(player => {
      const { key, id, name } = player;
      return (
        <Player
          key={key}
          id={id}
          name={name}
          handleRemove={this.props.removePlayer}
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
            updateWinScore={this.props.updateWinScore}
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
