import React, { Component } from 'react';

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
      <button
        onClick={() => (handleRemove ? handleRemove(id) : handleEndRound(id))}>
        {buttonText}
      </button>
    );
    return (
      <div>
        <h3>{name}</h3>
        <p>Score: {score}</p>
        {button}
      </div>
    );
  }
}
