import React, { Component } from 'react';
import './Player.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

export default class Player extends Component {
  render() {
    const {
      name,
      score,
      id,
      handleRemove,
      handleEndRound,
      playing,
    } = this.props;
    const removeButton = (
      <Button
        size="small"
        className="Player-remove"
        onClick={() => handleRemove(id)}
        style={{ backgroundColor: '#d72600' }}>
        <DeleteIcon style={{ color: 'white' }} />
      </Button>
    );
    return (
      <div className="Player">
        <h3
          className="Player-name"
          onClick={() => (handleEndRound ? handleEndRound(id) : undefined)}>
          <span>{name}</span>
          {playing ? score : removeButton}
        </h3>
      </div>
    );
  }
}
