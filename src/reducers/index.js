import { images } from 'src/data';
import {
  TOGGLE_MENU,
  CLOSE_MENU,
  SAVE_MOVIES,
  SAVE_PEOPLE,
  CHANGE_SEARCH_VALUE,
  CHANGE_ORDER_VALUE,
} from '../actions';

const initialState = {
  moviesList: null,
  pictures: images,
  menuIsOpen: false,
  loading: true,
  peopleList: null,
  searchValue: '',
  orderValue: '',
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
      };
    case SAVE_PEOPLE:
      return {
        ...state,
        peopleList: action.people,
        loading: false,
      };
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.newValue,
      };
    case CHANGE_ORDER_VALUE:
      return {
        ...state,
        orderValue: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
