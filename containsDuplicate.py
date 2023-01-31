class Solution:
    def containsNearbyDuplicate(self, nums: list[int], k: int) -> bool:

        d = {}
        
        for i,v in enumerate(nums) :
            if v in d and i - d[v] <= k :
                return True
            d[v] = i
    
        return False

array = [1,2,3,1,2,3]
k = 2

nums = [1,2,3,1]
k2 = 3

solution = Solution()
print(solution.containsNearbyDuplicate(array, k)) # False
print(solution.containsNearbyDuplicate(nums, k2)) # True