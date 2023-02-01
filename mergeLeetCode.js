const merge = (nums1, m, nums2, n) => {
    let start = m - 1 
    let end = n - 1 

    for(let i = m + n - 1; i >= 0; i--) {
        if(end < 0) break

        if(nums1[start] > nums2[end]) {
           nums1[i] = nums1[start]
           start--
        }else {
            nums1[i] = nums2[end]
            end--
        }

    }
    return nums1

};

