function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
        
    if(!str1 || !str2) return false;
    
    while(j < str2.length) {
            
        if(str2[j] === str1[i]) i++
        
        if(i === str1.length) return true 
        j++
    }
    return false
}
console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('abc', 'acb'))