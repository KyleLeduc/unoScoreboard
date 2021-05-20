import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import styles from './styles/GameSettingsFormStyles';

export default withStyles(styles)(
  class GameSettingsForm extends Component {
    constructor(props) {
      super(props);
      this.state = { winScore: this.props.winScore };
    }
    handleSubmit = evt => {
      evt.preventDefault();
      console.log('submitted');
    };
    handleChange = evt => {
      const { name, value } = evt.target;
      const safeParseInt = winScore => {
        const safeWinScore = parseInt(winScore.replace(/\D/, ''));
        return Number.isNaN(safeWinScore) ? 0 : safeWinScore;
      };
      this.props.updateWinScore(safeParseInt(value));

      this.setState({
        // prevents non number values from being input
        [name]: safeParseInt(value),
      });
    };
    render() {
      const { classes } = this.props;
      return (
        <form className={classes.gameSettingsForm} onSubmit={this.handleSubmit}>
          <TextField
              className={classes.winScoreInput}
              id="winScore"
              name="winScore"
              variant="filled"
              size="small"
              autoComplete="off"
              inputProps={{ inputMode: 'numeric' }}
              label="Winning Score"
              value={this.state.winScore}
              onChange={this.handleChange}
            />
        </form>
      );
    }
  },
);
