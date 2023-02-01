var mergeTwoArr = (list1, list2) => {

   let i = 0;
   let j = 0;
   let results = [];


    while(i < list1.length && j < list2.length){
        if(list2[j] > list1[i]){
            results.push(list1[i]);
            i++;
        } else {
            results.push(list2[j])
            j++;
        }
    }
     while(i < list1.length) {
        results.push(list1[i])
        i++;
    }
    while(j < list2.length) {
        results.push(list2[j])
        j++;
    }
   return results
}



const num1 = [1,2,4]
const num2 = [1,3,4]

console.log(mergeTwoArr(num1,num2))


