import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import NewPlayerForm from './NewPlayerForm';
import GameSettingsForm from './GameSettingsForm';
import Player from './Player';

const styles = {
  border: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    maxWidth: '350px',
    padding: '1em',
    backgroundColor: 'white',
    borderRadius: '15%',
    marginTop: '2vh',
  },
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
    marginTop: '2rem',
    textDecoration: 'none',
    textStroke: '0.75px black',
    color: 'white',
  },
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
      return (
        <div className={classes.border}>
          <div className={classes.lobby}>
            <h1 className={classes.title}>Uno Score Tracker</h1>
            <GameSettingsForm
              winScore={gameSettings.winScore}
              updateWinScore={updateWinScore}
            />
            <NewPlayerForm handleClick={addPlayer} />
            {this.renderPlayerList()}

            <Link
              className={classes.startGame}
              to="/game"
              onClick={() => startGame(this.state)}>
              Start Game
            </Link>
          </div>
        </div>
      );
    }
  },
);
