export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const CLOSE_MENU = 'CLOSE_MENU';
export const closeMenu = () => ({
  type: CLOSE_MENU,
});

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const fetchMovies = () => ({
  type: FETCH_MOVIES,
});

export const SAVE_MOVIES = 'SAVE_MOVIES';
export const saveMovies = (movies) => ({
  type: SAVE_MOVIES,
  movies,
});
