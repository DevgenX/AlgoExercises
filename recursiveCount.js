

const recursiveCount = (num) => {

  // if num is 10, return undefined and stop the count
  if (num === 10) return undefined;
  console.log(num);

  // if num isn't equal to 10, increment
  num++;

  // recurse
  return recursiveCount(num);
}


const t1 = performance.now()
console.log(recursiveCount(0)) // should count 0 to 9
const t2 = performance.now()

console.log(`Time elapsed ${t2-t1} ms`) // Logged : Time elapsed 2.052165985107422 ms

const forLoopCount = (num) => {

  for(let i = num; i < 10; i++) {
    if(num === 10) return undefined
      console.log(i)
      
  }

}

const t3 = performance.now()
console.log(forLoopCount(0))
const t4 = performance.now()

console.log(`Time elapsed ${t4-t3} ms`) // Logged : Time elapsed 0.42983436584472656 ms




