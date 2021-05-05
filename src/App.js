import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Scoreboard from './Scoreboard';
import Lobby from './Lobby';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSettings: {
        winScore: 500,
        players: [
          { name: 'Fiona', score: 0, key: 1, id: 1 },
          { name: 'Kyle', score: 0, key: 2, id: 2 },
        ],
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

  endGame = () => {
    this.setState({ gameStats: { ...this.state.gameStats, playing: false } });
  };

  winCheck = () => {
    const { winScore } = this.state.gameSettings;
    const { topScorer } = this.state.gameStats;
    if (topScorer.score >= winScore) {
      this.endGame();
      // this.setState({ gameStats: { ...this.state.gameStats, playing: false } });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Uno!!!</h1>
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
              <Scoreboard
                gameSettings={this.state.gameSettings}
                topScorer={this.state.gameStats.topScorer}
                endRound={this.endRound}
                endGame={this.endGame}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
