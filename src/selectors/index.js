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
