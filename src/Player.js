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
      playing,
    } = this.props;
    const removeButton = (
      <button className="Player-remove" onClick={() => handleRemove(id)}>
        {buttonText}
      </button>
    );
    return (
      <div className="Player">
        <h3
          className="Player-name"
          onClick={() => (handleEndRound ? handleEndRound(id) : undefined)}>
          <span>{name}</span>
          {playing ? score : undefined}
        </h3>
        {playing ? undefined : removeButton}
      </div>
    );
  }
}
