// First Version
const pivot = (arr, start=0, end= arr.length - 1) => {
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for(let i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}


let quickSort = (arr, start = 0, end = arr.length - 1) => {
	if(start < end) {
		let pivotIndex=pivot(arr,start,end)
		quickSort(arr, start, pivotIndex-1)
		quickSort(arr, pivotIndex+1, end)
		}
    return arr
}


console.log(quickSort([4,6,9,1,2,5]))
