const { getUniqueElements, getObjectKeys, arrayIntersection } = require('./dataStructureUtils');

test('Get unique elements from array', () => {
  const arr = [1, 2, 2, 3, 4, 4, 5];
  expect(getUniqueElements(arr)).toEqual([1, 2, 3, 4, 5]);
});

test('Get keys from object', () => {
  const obj = { a: 1, b: 2, c: 3 };
  expect(getObjectKeys(obj)).toEqual(['a', 'b', 'c']);
});

test('Get intersection of two arrays', () => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [3, 4, 5, 6];
  expect(arrayIntersection(arr1, arr2)).toEqual([3, 4]);
});