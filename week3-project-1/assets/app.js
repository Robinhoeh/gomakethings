/*
How do you figure out how many words are in the text?
How do you deal with things like double spaces after periods, or someone who accidentally hits the space bar a few times (two? three?) between words?

As the user types, the .word-count and .character-count elements should update to show the number of words and characters, respectively.
*/

// Initiate reference to DOM elements that get updated
// Listen for user input in text area
// Constantly check length of word every keydown/keyup
// Update the word count variable
// Constantly check length of entire character count
// Update the character count variable

// Variables
const wordApp = {};
wordApp.app = document.querySelector('.app');
wordApp.wordWord = document.querySelector('.js-word-count');
wordApp.charCount = document.querySelector('.js-character-count');
wordApp.textArea = document.querySelector('.js-text-area');


wordApp.amountOfChar = (e) =>  {
  wordApp.charCount.textContent = e.target.value.length;
}

wordApp.textArea.addEventListener('keyup', wordApp.amountOfChar, false);






