import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';

export default class AddScoreForm extends Component {
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
    return (
      <div>
        <form className="AddScoreForm" onSubmit={this.handleSubmit}>
          <Input
            className="AddScoreForm-Input"
            id="score"
            name="score"
            type="number"
            min="0"
            step="1"
            autoFocus
            autoComplete="off"
            placeholder="Enter the score"
            value={this.state.score}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            className="AddScoreForm-button"
            style={{ backgroundColor: 'blue', color: 'white' }}>
            +
          </Button>
        </form>
        <Button
          onClick={() => this.props.scoreFormToggle(this.props.id)}
          className="AddScoreForm-button"
          style={{ backgroundColor: 'red', color: 'white' }}>
          X
        </Button>
      </div>
    );
  }
}
