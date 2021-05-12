import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class AddScoreForm extends Component {
  constructor(props) {
    super(props);
    this.state = { score: '' };
  }
  handleSubmit = evt => {
    const { id } = this.props;
    evt.preventDefault();
    this.props.addScore(id, this.state.score);
    this.setState({ score: '' });
  };
  handleChange = evt => {
    const { name, value } = evt.target;
    const safeParseInt = addScore => {
      const safeAddScore = parseInt(addScore.replace(/\D/, ''));
      return Number.isNaN(safeAddScore) ? 0 : safeAddScore;
    };
    this.setState({
      [name]: safeParseInt(value),
    });
  };
  render() {
    return (
      <div>
        <form className="AddScoreForm" onSubmit={this.handleSubmit}>
          <input
            className="AddScoreForm-Input"
            id="score"
            name="score"
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
