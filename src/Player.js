import React, { Component } from 'react';
import './Player.css';

export default class Player extends Component {
  render() {
    const {
      name,
      score,
      id,
      handleRemove,
      handleEndRound,
      buttonText,
    } = this.props;
    const button = (
      <button className="Player-remove" onClick={() => handleRemove(id)}>
        {buttonText}
      </button>
    );
    return (
      <div className="Player">
        {handleRemove ? button : undefined}
        <h3
          className="Player-name"
          onClick={() => (handleEndRound ? handleEndRound(id) : undefined)}>
          {name}
        </h3>
        <p className="Player-score">Score: {score}</p>
      </div>
    );
  }
}
