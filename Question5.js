function filterArray(arr, k) {
    if(k > arr.length || k <= 0) return "Please enter a valid range."; // k is invalid

    for (let i = 0; i < k - 1; i++) { // loop k-1 times
        const max_element_index = arr.indexOf(Math.max(...arr)); //index of max element
        arr.splice(max_element_index, 1) // removing max element from array
    }
    return Math.max(...arr); // max value here is kth max of whole starting array
}


//testcases
const arr = [10,4,12,9,87,34];
const k = 2;
console.log(filterArray(arr, k));


