const styles = {
  gameSettingsForm: {
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    width: "80%",
  },
  winScoreInput: {
    width: "100%",
    boxShadow: "-1px 1px 3px black",
    borderRadius: "5px",
    textShadow: "none",
    textStroke: "0",
    backgroundColor: "#fff",
  },
  startButton: {
    marginBottom: "0.75em",
    fontWeight: "900",
    fontSize: "1em",
    textShadow: "inherit",
    textStroke: "inherit",
    backgroundColor: "hsl(215, 91%, 35%)",
    boxShadow: "-1px 1px 3px black",
    color: "white",
    "&&:disabled": {
      backgroundColor: "hsl(215, 91%, 28%)",
      color: "hsl(100, 0%, 80%)",
    },
    "&&:hover": {
      backgroundColor: "#0956bf",
    },
  },
};

export default styles;
