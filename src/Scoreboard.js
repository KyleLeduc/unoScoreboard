import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Scoreboard.css';

export default class ScoreBoard extends Component {
  render() {
    const { topScorer } = this.props.gameStats;
    const { players } = this.props.gameSettings;
    return (
      <div className="Scoreboard-wrap">
        <div className="Scoreboard">
          <h1>Uno Score Tracker</h1>
          {Object.keys(topScorer).length === 0 ? (
            <Redirect to="/" />
          ) : undefined}
          <h2 className="Scoreboard-message">{`${topScorer.name} wins with ${topScorer.score} points!`}</h2>
          {players.map(player => {
            return (
              <div key={player.id}>{`${player.name} - ${player.score}`}</div>
            );
          })}
          <Link
            className="Scoreboard-newGame"
            onClick={this.props.resetGame}
            to="/">
            New Game
          </Link>
        </div>
      </div>
    );
  }
}
