const fibonacci = (n) => {
  
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Expecting: 0");
console.log("=>", fibonacci(0));
console.log("");

console.log("Expecting: 1");
console.log("=>", fibonacci(2));

console.log("");

console.log("Expecting: 55");
console.log("=>", fibonacci(10));