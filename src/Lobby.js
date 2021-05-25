import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import GameSettingsForm from './GameSettingsForm';
import Player from './Player';

import styles from './styles/LobbyStyles';

export default withStyles(styles)(
  class Lobby extends Component {
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
      const { classes, gameSettings, addPlayer, updateWinScore, startGame } =
        this.props;

      return (
        <div className={classes.lobby}>
          <h1 className={classes.title}>Uno Score Tracker</h1>

          <GameSettingsForm
            winScore={gameSettings.winScore}
            updateWinScore={updateWinScore}
            addPlayer={addPlayer}
            gameSettings={gameSettings}
            startGame={startGame}
          />
          {this.renderPlayerList()}
        </div>
      );
    }
  },
);
