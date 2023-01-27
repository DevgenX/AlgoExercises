def search_index(nums: list[int], target: [int]):

  for i, v in enumerate(nums):
    if v == target:
      return i
    else:
      nums.append(target)
      return nums.sort().index(target)
