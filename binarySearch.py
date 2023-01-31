import math

def binarySearch(nums: list[int], target:int):
    
    start = 0
    end = len(nums)
    
    while start <= end: 
        mid = math.floor((start + end) / 2)
        if nums[mid] == target :
            return mid 
        elif nums[mid] > target :
            end = mid - 1
        else :
            start = mid + 1
            
        mid = math.floor((start + end) / 2)
        return mid
    
 
 
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
target = 5

numbers2 = [1, 2, 3, 5, 6,7,8,9,10];
target2 = 2;

numbers3 = [1, 3, 5, 6, 7, 8, 9, 10];
target3 = 7;

numbers4 = [1, 2, 3, 4, 5, 10];
target4 = 2;

print(binarySearch(numbers, target)) # should log : 4
print(binarySearch(numbers2, target2)) # should log : 1
print(binarySearch(numbers3, target3)) # should log : 4
print(binarySearch(numbers4, target4)) # should log : 1


        