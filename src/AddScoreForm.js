import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import styles from './styles/AddScoreFormStyles';

export default withStyles(styles)(
  class AddScoreForm extends Component {
    constructor(props) {
      super(props);
      this.state = { score: '' };
    }
    handleSubmit = evt => {
      evt.preventDefault();
      const { id, addScore, scoreFormToggle } = this.props;
      const { score } = this.state;
      if (score > 0) {
        addScore(id, score);
      } else {
        scoreFormToggle(id);
      }
    };
    handleChange = evt => {
      const { name, value } = evt.target;
      const safeParseInt = score => {
        return parseInt(score.replace(/\D/, ''));
      };
      this.setState({
        [name]: safeParseInt(value),
      });
    };
    render() {
      const { classes } = this.props;
      return (
        <div>
          <form className={classes.AddScoreForm} onSubmit={this.handleSubmit}>
            <TextField
              className={classes.AddScoreFormInput}
              id="score"
              name="score"
              variant="filled"
              size="small"
              autoFocus
              autoComplete="off"
              label="Enter the Score"
              value={this.state.score}
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              size="small"
              style={{ backgroundColor: 'blue', color: 'white' }}>
              +
            </Button>
            <Button
              onClick={() => this.props.scoreFormToggle(this.props.id)}
              size="small"
              style={{ backgroundColor: 'red', color: 'white' }}>
              X
            </Button>
          </form>
        </div>
      );
    }
  },
);
