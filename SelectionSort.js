const selectionSort = (arr) => {
  // type your code here
  return arr.sort((a, b) => (a > b ? 1 : -1));
}




  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("Result is =>", selectionSort([3, -1, 5, 2]));

  console.log("");