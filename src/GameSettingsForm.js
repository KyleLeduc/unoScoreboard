import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  gameSettingsForm: {
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  winScoreInput: {
    marginTop: '5px',
    boxShadow: '-1px 1px 3px black',
    borderRadius: '5px',
    border: '1px solid gray',
  },
};

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
          <label htmlFor="winScore">Winning Score: </label>
          <input
            className={classes.winScoreInput}
            id="winScore"
            name="winScore"
            value={this.state.winScore}
            onChange={this.handleChange}
          />
        </form>
      );
    }
  },
);
