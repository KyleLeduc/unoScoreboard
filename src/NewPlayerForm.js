import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Button from '@material-ui/core/Button';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/styles';

import styles from './styles/NewPlayerFormStyles';

export default withStyles(styles)(
  class NewPlayerForm extends Component {
    constructor(props) {
      super(props);
      this.state = { name: '' };
    }
    handleClick = evt => {
      evt.preventDefault();
      const key = uuid();
      this.props.addPlayer({
        ...this.state,
        key,
        id: key,
        score: 0,
        scoreForm: false,
      });
      this.setState({ name: '' });
    };
    handleChange = evt => {
      const { name, value } = evt.target;
      this.setState({
        [name]: value,
      });
    };
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.newPlayerForm}>
          <TextValidator
            className={classes.nameInput}
            error={!this.props.gameReady}
            helperText={!this.props.gameReady ? 'Minimum 2 players' : ''}
            id="name"
            name="name"
            variant="filled"
            size="small"
            autoComplete="off"
            label="Player Name"
            value={this.state.name}
            validators={['maxStringLength:10']}
            errorMessages={['Max name length exceeded']}
            onChange={this.handleChange}
          />
          <Button
            disabled={this.state.name.length <= 0}
            type="submit"
            size="small"
            className={classes.addButton}
            onClick={this.handleClick}>
            <PersonAddOutlinedIcon />
          </Button>
        </div>
      );
    }
  },
);
