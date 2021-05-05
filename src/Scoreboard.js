import React, { Component } from 'react';

export default class ScoreBoard extends Component {
  render() {
    const { topScorer } = this.props.gameStats;
    const { players } = this.props.gameSettings;
    return (
      <div>
        <h2>{`${topScorer.name} wins with ${topScorer.score} points!`}</h2>
        {players.map(player => {
          return <div key={player.id}>{`${player.name} - ${player.score}`}</div>
        })}
      </div>
    );
  }
}
