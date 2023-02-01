// Merges two already sorted arrays
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
             console.log(results)
    }
    // if the length of the arrays are not equal, 
    // just add them in 
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}


const mergeSort = (arr) => {    
    if(arr.length <=  1) return arr;
    let mid = arr.length / 2 
    let start = mergeSort(arr.slice(0, mid))
    let end = mergeSort(arr.slice(mid))
    return merge(start,end)

}


console.log(mergeSort([74,25,36,200,100]))

                   