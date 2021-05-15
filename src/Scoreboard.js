import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
  title: {
    margin: '0',
  },
  message: {
    width: '95%',
    textAlign: 'center',
  },
  scoreBoard: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: '1em 0',
    borderRadius: '15%',
    backgroundColor: '#0956bf',
  },

  newGame: {
    marginTop: '2rem',
    textDecoration: 'none',
    textStroke: '0.75px black',
    color: 'white',
  },
};

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
