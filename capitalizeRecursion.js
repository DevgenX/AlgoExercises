function capitalizeFirst (arr) {
  
  if(arr.length === 0) return []
  
    
    let word = arr[0]
    
    let capitalized = word.charAt(0).toUpperCase() + word.substring(1)
    
    return [capitalized].concat(capitalizeFirst(arr.slice(1)))
  
}
