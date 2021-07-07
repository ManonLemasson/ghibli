import axios from 'axios';
import { FETCH_MOVIES, saveMovies } from 'src/actions';

const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      axios.get('https://ghibliapi.herokuapp.com/films')
        .then((response) => {
          // handle success
          store.dispatch(saveMovies(response.data));
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          // always executed
        });
      break;
    default:
  }
  next(action);
};

export default ajax;
