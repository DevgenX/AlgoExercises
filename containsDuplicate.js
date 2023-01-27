const containsDuplicate2 = (num) => {

    num = num.sort()

    for(let i = 0; i < num.length; i++) {
        if(num[i] === num[i+1]) {
            return true;
        }
    }
    return false;
}

const x = [1,5,3,2,6,1]


console.log(containsDuplicate2(x))
