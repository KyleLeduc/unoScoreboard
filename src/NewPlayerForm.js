import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './NewPlayerForm.css';
import Button from '@material-ui/core/Button';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

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
      <form className="NewPlayerForm" onSubmit={this.handleSubmit}>
        <input
          className="NewPlayerForm-Input"
          id="name"
          name="name"
          placeholder="Player Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Button
          type="submit"
          className="NewPlayerForm-button"
          style={{ backgroundColor: '#379711', color: 'white' }}>
          <PersonAddOutlinedIcon />
        </Button>
      </form>
    );
  }
}
