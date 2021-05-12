import React, { Component } from 'react';
import './Player.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AddScoreForm from './AddScoreForm';

export default class Player extends Component {
  render() {
    const {
      name,
      score,
      id,
      handleRemove,
      scoreFormToggle,
      scoreForm,
      playing,
      addScore,
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
    const player = (
      <h3
        className="Player-name"
        onClick={() => (scoreFormToggle ? scoreFormToggle(id) : undefined)}>
        <span>{name}</span>
        {playing ? score : removeButton}
      </h3>
    );
    return (
      <div className="Player">
        {scoreForm ? (
          <AddScoreForm
            addScore={addScore}
            id={id}
            scoreFormToggle={scoreFormToggle}
          />
        ) : (
          player
        )}
      </div>
    );
  }
}
