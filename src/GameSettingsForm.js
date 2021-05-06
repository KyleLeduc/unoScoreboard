import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GameSettingsForm.css';
// import { v4 as uuid } from 'uuid';

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
        <h3>Settings</h3>
        <label htmlFor="winScore">Winning Score: </label>
        <input
          className="GameSettingsForm-winScore"
          id="winScore"
          name="winScore"
          value={this.state.winScore}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
