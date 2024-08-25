export function findImageIndex(array, searchString) {
  return array.findIndex((item) => item.includes(searchString));
}