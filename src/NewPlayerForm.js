import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

export default class NewPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  handleSubmit = evt => {
    evt.preventDefault();
    const key = uuid();
    this.props.handleClick({ ...this.state, key, id: key, score: 0 });
    this.setState({ name: '' });
  };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="name"
          name="name"
          placeholder="Player Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button>Add Player</button>
      </form>
    );
  }
}
