import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class ScoreBoard extends Component {
  render() {
    const { topScorer } = this.props.gameStats;
    const { players } = this.props.gameSettings;
    return (
      <div>
        {Object.keys(topScorer).length === 0 ? <Redirect to="/" /> : undefined}
        <h2>{`${topScorer.name} wins with ${topScorer.score} points!`}</h2>
        {players.map(player => {
          return (
            <div key={player.id}>{`${player.name} - ${player.score}`}</div>
          );
        })}
        <Link to="/">New Game</Link>
      </div>
    );
  }
}
