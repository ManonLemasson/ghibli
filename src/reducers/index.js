import data, { images } from 'src/data';

const initialState = {
  moviesList: data,
  images: images,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
