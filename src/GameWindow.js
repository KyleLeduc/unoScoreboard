import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Player from './Player';

const styles = {
  title: {
    margin: '0',
  },

  gameWindow: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: '1em 0',
    borderRadius: '15%',
    backgroundColor: '#379711',
  },

  endGame: {
    marginTop: '2rem',
    textDecoration: 'none',
    textStroke: '0.75px black',
    color: 'white',
  },
};

export default withStyles(styles)(
  class GameWindow extends Component {
    static defaultProps = {
      timestamp: new Date(),
    };
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
    }

    renderPlayerList = () => {
      return this.props.gameSettings.players.map(player => {
        const { key, id, name, score, scoreForm } = player;
        return (
          <Player
            key={key}
            id={id}
            name={name}
            score={score}
            scoreForm={scoreForm}
            addScore={this.props.addScore}
            scoreFormToggle={this.props.scoreFormToggle}
            playing={this.props.gameStats.playing}
          />
        );
      });
    };

    renderMessage = () => {
      const { winScore } = this.props.gameSettings;
      const { topScorer } = this.props.gameStats;
      const msg =
        topScorer && Object.keys(topScorer).length > 0
          ? 'gamePlaying'
          : 'newGame';

      switch (msg) {
        case 'newGame':
          return <h4>Select the round winner's name add their score</h4>;
        case 'gamePlaying':
          return (
            <h4>{`${topScorer.name} is ${
              winScore - topScorer.score
            } points away from winning`}</h4>
          );

        default:
          break;
      }
    };
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.gameWindow}>
          <h1 className={classes.title}>Uno Score Tracker</h1>
          {this.props.gameStats.playing ? undefined : (
            <Redirect to="/game-over" />
          )}
          {this.renderMessage()}
          {this.renderPlayerList()}
          <Link className={classes.endGame} to="#" onClick={this.props.endGame}>
            End Game
          </Link>
        </div>
      );
    }
  },
);
