import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Button from '@material-ui/core/Button';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { withStyles } from '@material-ui/styles';

const styles = {
  newPlayerForm: {
    margin: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  nameInput: {
    marginRight: '1rem',
    width: '100%',
    flexGrow: '2',
    boxShadow: '-1px 1px 3px black',
    borderRadius: '5px',
    border: '1px solid gray',
  },
  addButton: {
    boxShadow: '-1px 1px 3px black',
    color: 'white',
    backgroundColor: '#379711',
    '&:hover': {
      backgroundColor: 'hsl(103, 80%, 29%)'
    }
  },
};

export default withStyles(styles)(
  class NewPlayerForm extends Component {
    constructor(props) {
      super(props);
      this.state = { name: '' };
    }
    handleSubmit = evt => {
      evt.preventDefault();
      const key = uuid();
      this.props.handleClick({
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
        <form className={classes.newPlayerForm} onSubmit={this.handleSubmit}>
          <input
            className={classes.nameInput}
            id="name"
            name="name"
            placeholder="Player Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Button type="submit" size="small" className={classes.addButton}>
            <PersonAddOutlinedIcon />
          </Button>
        </form>
      );
    }
  },
);
