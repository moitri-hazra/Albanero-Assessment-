function spaceSegmentation(s, wordArray) {
    for (let i = 0; i < wordArray.length; i++) { // starting loop for words
        const word = wordArray[i]; // getting word for i value
        if (s.includes(word)) {
            s = s.replace(new RegExp(word, 'g'), ''); //if word exist in string, we remove it from string
        }
    }
    if (s.length > 0) {
        return false; // if string after checking for all words is not empty then there is something outside array in it, so false
    }
    return true;
}

// Example usage
const s = "leetcode";
const wordArray = ["leet", "code" ];
console.log(spaceSegmentation(s, wordArray));
