const fizzBuzz = (n) => {
  // Write your code here

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

const t1 = performance.now()
console.log(fizzBuzz(16));
const t2 = performance.now()
console.log(`Time elapsed ${t2-t1} ms`) //  Time elapsed 1.8677501678466797 ms

const fizzBuzz1 = (n) => {
  // Write your code here
    
    let output = ""
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output+= "FizzBuzz";
    } else if (i % 3 === 0) {
      output+= "Fizz";
    } else if (i % 5 === 0) {
      output +="Buzz"
    } else {
      output+= i
    }
  }
  return output
};

console.log(fizzBuzz1(16))

const t3 = performance.now()
console.log(fizzBuzz1(16));
const t4 = performance.now()
console.log(`Time elapsed ${t4-t3} ms`) // Time elapsed Time elapsed 0.005374908447265625 ms

