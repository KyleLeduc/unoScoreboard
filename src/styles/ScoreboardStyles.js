const styles = {
  message: {
    textAlign: "center",
    fontSize: "1.2em",
  },
  scoreBoard: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    alignItems: "center",
    padding: "1em 0",
    borderRadius: "15%",
    backgroundColor: "#0956bf",
  },
  scoreBoardDisplay: {
    width: "80%",
  },
  newGame: {
    margin: "1em 0",
    fontWeight: "900",
    fontSize: "1em",
    textShadow: "inherit",
    textStroke: "inherit",
    backgroundColor: "hsl(103, 80%, 29%)",
    "&&:hover": {
      backgroundColor: "#379711",
    },
    boxShadow: "-1px 1px 3px black",
    color: "white",
    width: "100%",
  },
};

export default styles;
