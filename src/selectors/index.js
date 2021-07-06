/* eslint-disable import/prefer-default-export */
export function findImageUrl(picturesList, name) {
  return picturesList.find((picture) => picture.name === name);
}
