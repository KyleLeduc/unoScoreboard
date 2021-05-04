import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="winScore">Winning Score: </label>
        <input
          id="winScore"
          name="winScore"
          value={this.state.winScore}
          onChange={this.handleChange}
        />
        <Link to="/game" onClick={() => this.props.startGame(this.state)}>
          <button>Start Game</button>
        </Link>
      </form>
    );
  }
}
