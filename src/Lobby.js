import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import GameSettingsForm from "./GameSettingsForm";

import styles from "./styles/LobbyStyles";

export default withStyles(styles)(
  class Lobby extends Component {
    render() {
      const { classes, gameSettings, updateWinScore, startGame } = this.props;

      return (
        <div className={classes.lobby}>
          <h1 className={classes.title}>Uno Score Tracker</h1>

          <GameSettingsForm
            winScore={gameSettings.winScore}
            updateWinScore={updateWinScore}
            gameSettings={gameSettings}
            startGame={startGame}
          />
        </div>
      );
    }
  }
);
