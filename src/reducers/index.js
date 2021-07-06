import data, { images } from 'src/data';
import { TOGGLE_MENU, CLOSE_MENU } from '../actions';

const initialState = {
  moviesList: data,
  pictures: images,
  menuIsOpen: false,
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
    default:
      return state;
  }
};

export default reducer;
