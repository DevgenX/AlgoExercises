def selection_sort(arr) :
    for i in range(len(arr)):
        smallest = i
        for j in range(i + 1, len(arr)) :
            if arr[j] < arr[smallest] :
                smallest = j
        arr[j], arr[smallest] = arr[smallest], arr[j]
    return arr

print(selection_sort([19,34,17,10,22]))

