import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import styles from "./styles/AddScoreFormStyles";

export default withStyles(styles)(
  class AddScoreForm extends Component {
    constructor(props) {
      super(props);
      this.state = { score: "" };
    }
    handleSubmit = (evt) => {
      evt.preventDefault();
      const { id, addScore } = this.props;
      const { score } = this.state;
      addScore(id, parseInt(score));
    };
    handleChange = (evt) => {
      const { name, value } = evt.target;
      this.setState({
        [name]: value,
      });
    };
    render() {
      const { classes } = this.props;
      return (
        <ValidatorForm
          ref="form"
          instantValidate={true}
          className={classes.AddScoreForm}
          onSubmit={this.handleSubmit}
        >
          <TextValidator
            className={classes.AddScoreFormInput}
            id="score"
            name="score"
            variant="filled"
            size="small"
            autoFocus
            autoComplete="off"
            validators={["required", "isNumber", "isPositive"]}
            errorMessages={[
              "Enter a winning score",
              "Must be a number",
              "Number must be positive",
            ]}
            inputProps={{ inputMode: "numeric" }}
            label="Enter the Score"
            value={this.state.score}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            size="small"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            +
          </Button>
          <Button
            onClick={() => this.props.scoreFormToggle(this.props.id)}
            size="small"
            style={{ backgroundColor: "red", color: "white" }}
          >
            X
          </Button>
        </ValidatorForm>
      );
    }
  }
);
