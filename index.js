const { getUniqueElements, getObjectKeys, arrayIntersection } = require('./dataStructureUtils');

// Example usage
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueElements = getUniqueElements(arr);
console.log('Unique Elements:', uniqueElements);

const obj = { a: 1, b: 2, c: 3 };
const keys = getObjectKeys(obj);
console.log('Object Keys:', keys);

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const intersection = arrayIntersection(arr1, arr2);
console.log('Array Intersection:', intersection);