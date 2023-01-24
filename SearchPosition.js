const searchPosition = (nums, target) => {

    for(const key in nums) {
        if(nums[key] === target) {
            return key
        }else {
            nums.push(target)
            return nums.sort().indexOf(target)
        }
    }

}

const numbers = [1,2,3,4,5] 
const target = 5 

const numbers2 = [1,3,5,6]
const target2 = 2 

const numbers3 = [1,3,5,6]
const target3 = 7 

console.log(searchPosition(numbers, target)) // should log : 4
console.log(searchPosition(numbers2, target2)) // should log : 2
console.log(searchPosition(numbers3, target3)) // should log : 4