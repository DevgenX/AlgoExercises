

const findShortestStringRecursive = (arr) => {

  // Create a shortest variable as basis for shortest

  let shortest = arr[0];

  // for base : 
  // if the array has no length or 1 element left, return that element
  if (arr.length <= 1) return arr[0];

  // check if the length of the next element is less than the shortest
  // reassign the variable if true, ignore if not
  if (arr[1].length < shortest.length) return arr[1];

  // recurse : slice the array
  return findShortestStringRecursive(arr.slice(1));
}

console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(["aaa", "a", "bb", "ccc"]));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(["cat", "hi", "dog", "an"]));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>",findShortestStringRecursive(["flower", "juniper", "lily", "dandelion"]))