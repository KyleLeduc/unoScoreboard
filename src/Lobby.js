import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import NewPlayerForm from './NewPlayerForm';
import GameSettingsForm from './GameSettingsForm';
import Player from './Player';

const styles = {
  title: {
    margin: '0',
  },

  lobby: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: '1em 0',
    borderRadius: '15%',
    backgroundColor: '#ecd407',
  },

  startGame: {
    marginTop: '1rem',
    textDecoration: 'none',
    textStroke: '0.75px black',
    color: 'white',
  },

  startGameDisabled: props =>
    props.gameSettings.players.length < 2
      ? {
          marginTop: '1rem',
          textDecoration: 'none',
          color: '	#999999',
          cursor: 'not-allowed',
          textStroke: '0.05px black',
          textShadow: '-1px 1px 0px black',
        }
      : undefined,
};

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
      const { classes, gameSettings, startGame, addPlayer, updateWinScore } =
        this.props;
      const gameIsReady = this.props.gameSettings.players.length > 1;
      return (
        <div className={classes.lobby}>
          <h1 className={classes.title}>Uno Score Tracker</h1>

          <GameSettingsForm
            winScore={gameSettings.winScore}
            updateWinScore={updateWinScore}
          />
          <NewPlayerForm handleClick={addPlayer} />

          {this.renderPlayerList()}

          <Link
            className={`${classes.startGame} ${classes.startGameDisabled}`}
            to={gameIsReady ? '/game' : '#'}
            onClick={() => startGame(this.state)}>
            Start Game
          </Link>
        </div>
      );
    }
  },
);
