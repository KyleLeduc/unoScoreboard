import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
          { name: 'Kyle', score: 0, key: 2, id: 2 }
        ]
      },
      playing: false,
      gameStats: {
        roundsPlayed: 0,
        topScorer: {},
      }
    };
  };

  addPlayer = (newPlayer) => {
    this.setState(st => ({
      gameSettings: {
        players: [...this.state.gameSettings.players, newPlayer]
      }
    }));
  };

  removePlayer = (id) => {
    this.setState({
      gameSettings: {
        players: this.state.gameSettings.players.filter(player => player.id !== id)
      }
    });
  };

  startGame = (winScore) => {
    this.setState({ 
      playing: true, 
      gameSettings: {
        players: this.state.gameSettings.players,
        ...winScore
      }});
  };

  endRound = (id) => {
    let newScore = parseInt(prompt('How many points?')); 
    let newScores = this.state.gameSettings.players.map(player => 
      player.id === id ? {...player, score: (player.score + newScore) } : player
    );
    const topScorer = newScores.slice().sort(function(a, b){return b.score - a.score})[0];
    this.setState(st => ({
      gameStats: {
        roundsPlayed: st.gameStats.roundsPlayed + 1,
        topScorer
      },
      players: [ ...newScores ]
    }));
  };

  endGame = (stats) => {
    this.setState({playing: false});
  }

  render() {
    return (
      <div className="App">
        <h1>Uno!!!</h1>
        <Switch>
          <Route 
            exact
            path='/'
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
            path='/game'
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
    )
  }
}

export default App;
