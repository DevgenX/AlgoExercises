
const recursiveSearch = (arr, target) => {

  // if arr[0] is equals to target, return true;

  // if the length of array is 0 and target is not hit, return false;

  if (arr[0] === target) return true;

  if (arr.length === 0) return false;

  // while it is not equal, slice the array at 0

  // then recurse
  return recursiveSearch(arr.slice(1), target);
}

const newArr = [1,4,5,2,3,6,7,2]
const t1 = performance.now()
console.log(recursiveSearch(newArr, 3))
const t2 = performance.now()
console.log(`Time elapsed ${(t2 - t1) } ms`)