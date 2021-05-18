import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import styles from './styles/ScoreboardStyles';

export default withStyles(styles)(
  class ScoreBoard extends Component {
    render() {
      const { classes, resetGame } = this.props;
      const { topScorer } = this.props.gameStats;
      const { players } = this.props.gameSettings;
      return (
        <div className={classes.scoreBoard}>
          <h1 className={classes.title}>Uno Score Tracker</h1>
          {Object.keys(topScorer).length === 0 ? (
            <Redirect to="/" />
          ) : undefined}
          <h2
            className={
              classes.message
            }>{`${topScorer.name} wins with ${topScorer.score} points!`}</h2>
          {players.map(player => {
            return (
              <div key={player.id}>{`${player.name} - ${player.score}`}</div>
            );
          })}
          <Link className={classes.newGame} onClick={resetGame} to="/">
            New Game
          </Link>
        </div>
      );
    }
  },
);
