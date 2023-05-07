const capitalizeWords = (array) => {
    let result = []
  for (let i = 0; i < array.length; i++) {

   newArr = array[i].charAt(0).toUpperCase() + array[i].substring(1)
   result.push(newArr)
  }

  return result;
}

console.log(capitalizeWords(['cat','dog']))