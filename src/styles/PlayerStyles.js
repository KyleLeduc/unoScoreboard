const styles = {
  player: {
    display: 'flex',
    alignItems: 'baseline',
    alignSelf: 'center',
    width: '100%',
  },
  removeButton: {
    boxShadow: '-1px 1px 3px black',
    backgroundColor: '	hsl(11, 100%, 38%)',
    color: 'white',
    '&:hover': {
      backgroundColor: '#d72600',
    },
  },
  playerName: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
};

export default styles;
