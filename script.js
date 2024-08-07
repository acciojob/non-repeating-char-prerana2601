// script.js

function firstNonRepeatedChar(str) {
    // Create a dictionary to count the occurrences of each character
    const charCount = {};
    
    // Populate the dictionary with character counts
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the string again to find the first non-repeating character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character is found, return null
    return null;
}

function findFirstNonRepeatedChar() {
    // Get the user input
    const inputString = document.getElementById('inputString').value;
    const resultElement = document.getElementById('result');

    // Compute the first non-repeating character
    const result = firstNonRepeatedChar(inputString);

    // Display the result
    resultElement.textContent = result === null ? 'No non-repeating character found.' : result;
}
