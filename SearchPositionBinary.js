const searchInsert = (nums, target) => {
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)

        if(nums[mid] === target) {
            return mid
        } 
        else if (nums[mid] > target) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
     }
        return left;
}

const numbers = [1,2,3,4,5,6,7,8,9] 
const target = 5

const numbers2 = [1,3,5,6]
const target2 = 2 

const numbers3 = [1,3,5,6]
const target3 = 7 

const numbers4 =[1,2,3,4,5,10]
const target4 = 2

console.log(searchInsert(numbers, target)) // should log : 4
console.log(searchInsert(numbers2, target2)) // should log : 2
console.log(searchInsert(numbers3, target3)) // should log : 4
console.log(searchInsert(numbers4, target4)) // should log : 1