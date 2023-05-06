function sameFrequency(int1, int2){

    const num1 = int1.toString()
    const num2 = int2.toString()
        
        //check the lengths of the parameters
    if(num1.length !== num2.length) return false;

    let countNum1 = {}
    let countNum2 = {}
  
   
    for(let i = 0; i < num1.length; i++) {
        countNum1[num1[i]] = (countNum1[num1[i]] || 0) + 1
    }

    for(let j = 0; j < num2.length; j++) {
        countNum2[num2[j]] = (countNum2[num2[j]] || 0) + 1
    }

    for(let key in countNum1) {
        console.log(countNum1[key], countNum2[key])
        if(countNum1[key] !== countNum2[key]) return false;
    }
    return true
}

    

console.log(sameFrequency(123, 213))