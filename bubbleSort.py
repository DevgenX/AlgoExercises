def bubbleSort(arr: list[int]) :
    
    index = len(arr) - 1
    isSorted = False
    while not isSorted :
        isSorted = True
        for nums in range(0, index):
           if(arr[nums] < arr[nums + 1]) :
               isSorted = False
               arr[nums], arr[nums + 1] = arr[nums+1],arr[nums]
            
    return arr

print(bubbleSort([35,36,2,4,5,9,25]))