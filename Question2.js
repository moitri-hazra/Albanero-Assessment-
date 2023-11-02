function getAnagrams(words) {
    const anagramDict = {}; // empty map 
    for (let i = 0; i < words.length; i++) {
        const word = words[i]; // getting ith word from words list
        const sortedWord = word.split('').sort().join(''); // sorting the words we end up with same words for anagrams
        if (anagramDict[sortedWord]) { 
            anagramDict[sortedWord].push(word);// if the sorted word exists, pushing the new word into the value array
        } else {
            anagramDict[sortedWord] = [word]; // if not then creating a new key-value pair
        }
    }
    return Object.values(anagramDict); // returning all the values
}

// testcases
const wordList = ["eat","tea","tan","ate","nat","bat"];
console.log(getAnagrams(wordList));
