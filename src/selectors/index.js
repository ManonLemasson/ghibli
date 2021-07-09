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
