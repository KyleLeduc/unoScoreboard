import React, { Component } from 'react';
import './GameSettingsForm.css';

export default class GameSettingsForm extends Component {
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
    return (
      <form className="GameSettingsForm" onSubmit={this.handleSubmit}>
        <label htmlFor="winScore">Winning Score: </label>
        <input
          className="GameSettingsForm-winScoreInput"
          id="winScore"
          name="winScore"
          value={this.state.winScore}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
