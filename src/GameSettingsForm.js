import React, { Component } from 'react';
import './GameSettingsForm.css';

export default class GameSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { winScore: this.props.winScore };
  }
  handleSubmit = evt => {
    evt.preventDefault();
  };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      // prevents non number values from being input
      [name]: parseInt(value.replace(/\D/, '')),
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
