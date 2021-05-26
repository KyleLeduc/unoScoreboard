const styles = theme => ({
  newPlayerForm: {
    margin: '1rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '100%',
  },
  nameInput: {
    boxShadow: '-1px 1px 3px black',
    borderRadius: '5px',
    textShadow: 'none',
    textStroke: '0',
    backgroundColor: 'hsl(100, 100%, 100%)',
  },
  addButton: {
    boxShadow: '-1px 1px 3px black',
    color: 'white',
    backgroundColor: '#379711',
    '&&:hover': {
      backgroundColor: 'hsl(103, 80%, 29%)',
    },
    '&&:disabled': {
      backgroundColor: 'hsl(103, 65%, 29%)',
      color: 'hsl(100, 0%, 80%)',
      cursor: 'not-allowed',
    },
  },
});

export default styles;
