function largestPossibleNumber(nums){
    const sortedArray = nums.map(String).sort((a,b)=> (b+a)-(a+b)); // converting array to string array and sorting the array to put the maximum numbers at the beginning 
    let result = ''; 

    if(sortedArray[0]=== '0'){
        return '0'; //if sorted array has 0 at start then return 0
    }else{
        result =sortedArray.join('') //then join and return
    }
    return result;

}

//testcases

const nums2 = [10,2];
const nums = [3, 30, 34, 5, 9];
console.log(largestPossibleNumber(nums));
console.log(largestPossibleNumber(nums2));