def two_sum(nums: list[int], target: [int]):
  d = {}
  # Enumerate through the array
  for i, v in enumerate(nums):
    # let r to be the result of subtracting target and the current val
    # if r is included in the dictionary
    # return d[r] which returns the index, and return the current index in the loop
    r = target - v
    if r in d:
      return [d[r], i]
    else:
      # else set the d[v](value) to have the index
      d[v] = i
