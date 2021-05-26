const styles = {
  gameSettingsForm: {
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  winScoreInput: {
    width: '100%',
    boxShadow: '-1px 1px 3px black',
    borderRadius: '5px',
    textShadow: 'none',
    textStroke: '0',
    backgroundColor: '#fff',
  },
  startButton: {
    marginTop: '1rem',
    fontWeight: '900',
    fontSize: '1.2em',
    textShadow: 'inherit',
    textStroke: 'inherit',
    backgroundColor: '#0956bf',
    boxShadow: '-1px 1px 3px black',
    color: 'white',
    '&&:disabled': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      color: 'white',
    },
    '&&:hover': {
      backgroundColor: 'hsl(215, 91%, 35%)',
    },
  },
};

export default styles;
