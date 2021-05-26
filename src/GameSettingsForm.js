import React, { Component } from 'react';
import NewPlayerForm from './NewPlayerForm';
import Player from './Player';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import styles from './styles/GameSettingsFormStyles';

export default withStyles(styles)(
  class GameSettingsForm extends Component {
    constructor(props) {
      super(props);
      this.state = { winScore: 500, players: [] };
    }
    addPlayer = newPlayer => {
      const newPlayerList = [...this.state.players, newPlayer];
      this.setState(st => ({
        players: [...newPlayerList],
      }));
    };
    removePlayer = id => {
      const newPlayerList = this.state.players.filter(
        player => player.id !== id,
      );
      this.setState({
        players: newPlayerList,
      });
    };
    handleSubmit = evt => {
      evt.preventDefault();
      const gameSettings = {
        ...this.state,
        winScore: parseInt(this.state.winScore),
      };
      this.props.startGame(gameSettings);
    };
    handleChange = evt => {
      const { name, value } = evt.target;
      this.setState({
        [name]: value,
      });
    };
    renderPlayerList = () => {
      return this.state.players.map(player => {
        const { key, id, name } = player;
        return (
          <Player
            key={key}
            id={id}
            name={name}
            handleRemove={this.removePlayer}
          />
        );
      });
    };
    render() {
      const gameReady = this.state.players.length > 1;
      const { classes } = this.props;
      return (
        <ValidatorForm
          ref="form"
          instantValidate={true}
          className={classes.gameSettingsForm}
          onSubmit={this.handleSubmit}>
          <TextValidator
            className={classes.winScoreInput}
            id="winScore"
            name="winScore"
            variant="filled"
            size="small"
            validators={['required', 'isNumber', 'isPositive']}
            errorMessages={[
              'Enter a winning score',
              'Must be a number',
              'Number must be positive',
            ]}
            autoComplete="off"
            inputProps={{ inputMode: 'numeric' }}
            label="Winning Score"
            value={this.state.winScore}
            onChange={this.handleChange}
          />
          <NewPlayerForm addPlayer={this.addPlayer} gameReady={gameReady} />
          {this.renderPlayerList()}
          <Button className={classes.startButton} disabled={!gameReady} type="submit">
            Start Game
          </Button>
        </ValidatorForm>
      );
    }
  },
);
