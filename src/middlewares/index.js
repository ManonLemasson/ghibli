import axios from 'axios';
import {
  FETCH_MOVIES,
  saveMovies,
  fetchPeople,
  FETCH_PEOPLE,
  savePeople,
} from 'src/actions';

const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      axios.get('https://ghibliapi.herokuapp.com/films')
        .then((response) => {
          // handle success
          store.dispatch(saveMovies(response.data));
          store.dispatch(fetchPeople());
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          // always executed
        });
      break;
    case FETCH_PEOPLE:
      axios.get('https://ghibliapi.herokuapp.com/people/')
        .then((response) => {
          // handle success
          store.dispatch(savePeople(response.data));
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
