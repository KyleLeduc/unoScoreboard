import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AddScoreForm from './AddScoreForm';
import { withStyles } from '@material-ui/styles';

const styles = {
  player: {
    display: 'flex',
    alignItems: 'baseline',
    alignSelf: 'center',
    width: '80%',
  },
  removeButton: {
    boxShadow: '-1px 1px 3px black',
  },
  playerName: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  },
};

export default withStyles(styles)(
  class Player extends Component {
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
        classes,
      } = this.props;

      const removeButton = (
        <Button
          size="small"
          className={classes.removeButton}
          onClick={() => handleRemove(id)}
          style={{ backgroundColor: '#d72600' }}>
          <DeleteIcon style={{ color: 'white' }} />
        </Button>
      );
      const player = (
        <h3
          className={classes.playerName}
          onClick={() => (scoreFormToggle ? scoreFormToggle(id) : undefined)}>
          <span>{name}</span>
          {playing ? score : removeButton}
        </h3>
      );
      return (
        <div className={classes.player}>
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
  },
);
