const styles = {
  title: {
    margin: "0",
  },

  gameWindow: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    alignItems: "center",
    padding: "1em 0",
    borderRadius: "15%",
    backgroundColor: "#379711",
  },
  gameWindowDisplay: {
    width: "80%",
  },
  endGame: {
    marginTop: "1rem",
    fontWeight: "900",
    fontSize: "1.2em",
    textShadow: "inherit",
    textStroke: "inherit",
    backgroundColor: "	hsl(11, 100%, 38%)",
    boxShadow: "-1px 1px 3px black",
    color: "white",
    width: "100%",
    "&&:hover": {
      backgroundColor: "#d72600",
    },
  },
};

export default styles;
