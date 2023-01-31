// returns a boolean

const linearSearch = (arr, target) => {

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) return true
    }
    
    return false;

}

// returns an array

const linearSearchMap= (arr, target) => {

    return arr.map((el) => {
        return el == target ? true : false
    })
}

// returns the num that is equal to target 

const linearSearchFilter= (arr, target) => {

    return arr.filter((el) => {
        return el == target 
    })
}

console.log(linearSearch([34,51,1,2,3,45,56,687], 51))
console.log(linearSearchMap([34,51,1,2,3,45,56,687], 51))
console.log(linearSearchFilter([34,51,1,2,3,45,56,687], 51))