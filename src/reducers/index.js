import data from 'src/data';

const initialState = {
  moviesList: data,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
