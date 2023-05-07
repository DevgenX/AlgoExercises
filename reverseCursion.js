const isPalindrome = (str) => {

    let strLow = str.toLowerCase()


    // base cases 

    if(strLow.length === 1) return true; 

    if(strLow.length === 2) return strLow[0] === strLow[1]

    if(strLow[0] === strLow.slice(-1)) return isPalindrome(strLow.slice(1, -1))


   return false;


}

console.log(isPalindrome('level'))

console.log('level'.slice(1,-1))