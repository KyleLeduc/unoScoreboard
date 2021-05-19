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
      backgroundColor: 'hsl(103, 80%, 29%)',
    },
  },
};

export default styles;
