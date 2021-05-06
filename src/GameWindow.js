import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Player from './Player';
import './GameWindow.css';

export default class GameWindow extends Component {
  static defaultProps = {
    timestamp: new Date(),
  };
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  renderPlayerList = () => {
    return this.props.gameSettings.players.map(player => {
      const { key, id, name, score } = player;
      return (
        <Player
          key={key}
          id={id}
          name={name}
          score={score}
          handleEndRound={this.props.endRound}
          buttonText="End Round"
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
        return <h4>Select the round winners name to begin</h4>;
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
    return (
      <div className="GameWindow">
        {this.props.gameStats.playing ? undefined : (
          <Redirect to="/game-over" />
        )}
        {this.renderMessage()}
        {this.renderPlayerList()}
        <Link
          className="GameWindow-endGame"
          to="/"
          onClick={this.props.endGame}>
          End Game
        </Link>
      </div>
    );
  }
}
