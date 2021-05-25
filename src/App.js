import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Lobby from './Lobby';
import GameWindow from './GameWindow';
import Scoreboard from './Scoreboard';
import { withStyles } from '@material-ui/styles';

import styles from './styles/AppStyles'

class App extends Component {
  static defaultProps = {
    resetGame: {
      gameStats: {
        playing: false,
        roundsPlayed: 0,
        topScorer: {},
      },
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      gameSettings: {
        winScore: 500,
        players: [],
      },
      gameStats: {
        playing: false,
        roundsPlayed: 0,
        topScorer: {},
      },
    };
  }

  addPlayer = newPlayer => {
    const newPlayerList = [...this.state.gameSettings.players, newPlayer];
    this.setState(st => ({
      gameSettings: {
        ...this.state.gameSettings,
        players: [...newPlayerList],
      },
    }));
  };

  removePlayer = id => {
    const newPlayerList = this.state.gameSettings.players.filter(
      player => player.id !== id,
    );
    this.setState({
      gameSettings: {
        ...this.state.gameSettings,
        players: newPlayerList,
      },
    });
  };

  updateWinScore = newWinScore => {
    const gameSettings = { ...this.state.gameSettings, winScore: newWinScore };
    this.setState({ gameSettings });
  };

  startGame = winScore => {
    const { gameSettings, gameStats } = this.state;
    this.setState({
      gameStats: { ...gameStats, playing: true },
      gameSettings: {
        ...gameSettings,
        ...winScore,
      },
    });
  };

  scoreFormToggle = id => {
    let clickedPlayer = this.state.gameSettings.players.map(player =>
      player.id === id ? { ...player, scoreForm: !player.scoreForm } : player,
    );
    this.setState({
      gameSettings: { ...this.state.gameSettings, players: clickedPlayer },
    });
  };

  addScore = (id, score) => {
    let newScores = this.state.gameSettings.players.map(player =>
      player.id === id
        ? { ...player, score: player.score + score, scoreForm: false }
        : player,
    );
    const topScorer = newScores.slice().sort(function (a, b) {
      return b.score - a.score;
    })[0];
    this.setState(
      {
        gameStats: {
          ...this.state.gameStats,
          roundsPlayed: this.state.gameStats.roundsPlayed + 1,
          topScorer,
        },
        gameSettings: {
          ...this.state.gameSettings,
          players: [...newScores],
        },
      },
      () => this.winCheck(),
    );
  };

  winCheck = () => {
    const { winScore } = this.state.gameSettings;
    const { topScorer } = this.state.gameStats;
    if (topScorer.score >= winScore) {
      this.endGame();
    }
  };

  endGame = () => {
    this.setState({ gameStats: { ...this.state.gameStats, playing: false } });
  };

  resetGame = () => {
    const { players, winScore } = this.state.gameSettings;
    const resetPlayers = players.map(player => {
      player.score = 0;
      player.scoreForm = false;
      return player;
    });
    this.setState({
      ...this.props.resetGame,
      gameSettings: { winScore, players: resetPlayers },
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <Lobby
                gameSettings={this.state.gameSettings}
                addPlayer={this.addPlayer}
                removePlayer={this.removePlayer}
                updateWinScore={this.updateWinScore}
                startGame={this.startGame}
                playing={this.state.gameStats.playing}
              />
            )}
          />
          <Route
            exact
            path="/game"
            render={routeProps => (
              <GameWindow
                gameSettings={this.state.gameSettings}
                gameStats={this.state.gameStats}
                scoreFormToggle={this.scoreFormToggle}
                addScore={this.addScore}
                endGame={this.endGame}
              />
            )}
          />
          <Route
            exact
            path="/game-over"
            render={routeProps => (
              <Scoreboard
                gameStats={this.state.gameStats}
                gameSettings={this.state.gameSettings}
                resetGame={this.resetGame}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);
