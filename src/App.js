import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Lobby from './Lobby';
import GameWindow from './GameWindow';
import Scoreboard from './Scoreboard';
import './App.css';

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
    this.setState(st => ({
      gameSettings: {
        players: [...this.state.gameSettings.players, newPlayer],
      },
    }));
  };

  removePlayer = id => {
    this.setState({
      gameSettings: {
        players: this.state.gameSettings.players.filter(
          player => player.id !== id,
        ),
      },
    });
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

  endRound = id => {
    let newScore = parseInt(prompt('How many points?'));
    let newScores = this.state.gameSettings.players.map(player =>
      player.id === id ? { ...player, score: player.score + newScore } : player,
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
      return player;
    });
    this.setState({
      ...this.props.resetGame,
      gameSettings: { winScore, players: resetPlayers },
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Uno Score Tracker</h1>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <Lobby
                gameSettings={this.state.gameSettings}
                addPlayer={this.addPlayer}
                removePlayer={this.removePlayer}
                startGame={this.startGame}
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
                endRound={this.endRound}
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

export default App;
