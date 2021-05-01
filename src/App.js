import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Scoreboard from './Scoreboard';
import Lobby from './Lobby';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        { name: 'Fiona', score: 0, key: 1, id: 1 },
        { name: 'Kyle', score: 0, key: 2, id: 2 }
      ],
      playing: false,
      gameStats: {
        roundsPlayed: 0
      }
    };
  };
  addPlayer = (newPlayer) => {
    this.setState(st => ({
      players: [...this.state.players, newPlayer]
    }));
  };

  removePlayer = (id) => {
    console.log(id)
    this.setState({
        players: this.state.players.filter(player => player.id !== id)
    });
  };

  startGame = () => {
    this.setState({playing: true});
  };

  endRound = (id) => {
    let newScore = parseInt(prompt('How many points?')); 
    let newScores = this.state.players.map(player => 
      player.id === id ? {...player, score: (player.score + newScore) } : player
    );
    this.setState(st => ({
      gameStats: {
        roundsPlayed: st.gameStats.roundsPlayed + 1
      },
      players: [ ...newScores ]
    }));
    // console.log(score, id);
  };

  endGame = (stats) => {
    console.log(stats);
    this.setState({playing: false});
  }

  render() {
    return (
      <div className="App">
        <h1>Uno!!!</h1>
        <Lobby 
          players={this.state.players}
          addPlayer={this.addPlayer}
          removePlayer={this.removePlayer}
          startGame={this.startGame}
        />
        <Scoreboard 
          players={this.state.players}
          endRound={this.endRound}
          endGame={this.endGame} 
        />
      </div>
    )
  }
}

export default App;
