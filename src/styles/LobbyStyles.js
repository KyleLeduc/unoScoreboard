const styles = {
  title: {
    margin: '0',
  },

  lobby: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: '1em 0',
    borderRadius: '15%',
    backgroundColor: '#ecd407',
  },

  startGame: {
    marginTop: '1rem',
    textDecoration: 'none',
    textStroke: '0.75px black',
    color: 'white',
  },

  startGameDisabled: props =>
    props.gameSettings.players.length < 2
      ? {
          color: '	#999999',
          cursor: 'not-allowed',
          textStroke: '0.05px black',
          textShadow: '-1px 1px 0px black',
        }
      : undefined,
};

export default styles;
