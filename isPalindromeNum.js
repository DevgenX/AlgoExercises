const isPalindrome = (x) => {

    
    let num = x.toString().split('').reverse().join('')


    return parseInt(num) === x ? true : false

};


const num = 121 // should log : TRUE
const num1 = -121 // should log : FALSE, reverse is 121-
const num2 = 10 // should log : FALSE

console.log(isPalindrome(num))
console.log(isPalindrome(num1))
console.log(isPalindrome(num2))



