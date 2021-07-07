import data, { images } from 'src/data';
import { TOGGLE_MENU, CLOSE_MENU, SAVE_MOVIES } from '../actions';

const initialState = {
  moviesList: data,
  pictures: images,
  menuIsOpen: false,
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen,
      };
    case CLOSE_MENU:
      return {
        ...state,
        menuIsOpen: false,
      };
    case SAVE_MOVIES:
      return {
        ...state,
        moviesList: action.movies,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
