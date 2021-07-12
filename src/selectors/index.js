/* eslint-disable import/prefer-default-export */
export function findImageUrl(picturesList, name) {
  return picturesList.find((picture) => picture.name === name);
}

export function findMovie(moviesList, searchedSlug) {
  return moviesList.find((movie) => movie.id === searchedSlug);
}

export function filterPeople(peopleList, movieUrl) {
  return peopleList.filter((people) => people.films[0] === movieUrl);
}

export const filterMoviesByQuery = (moviesList, query) => {
  if (!query) {
    return moviesList;
  }

  return moviesList.filter((movie) => {
    const movieName = movie.title.toLowerCase();
    return movieName.includes(query.toLowerCase());
  });
};

export const orderMovies = (moviesList, orderBy) => {
  if (orderBy === 'name') {
    moviesList.sort((a, b) => a.title.localeCompare(b.title, 'en', { ignorePunctuation: true }));
  }
  else if (orderBy === 'date') {
    moviesList.sort((a, b) => Number(a.release_date) - Number(b.release_date));
  }
  else if (orderBy === 'time') {
    moviesList.sort((a, b) => Number(a.running_time) - Number(b.running_time));
  }
  else if (orderBy === 'score') {
    moviesList.sort((a, b) => Number(b.rt_score) - Number(a.rt_score));
  }

  return moviesList;
};
