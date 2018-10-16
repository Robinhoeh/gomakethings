/*
How do you figure out how many words are in the text?
How do you deal with things like double spaces after periods, or someone who accidentally hits the space bar a few times (two? three?) between words?

As the user types, the .word-count and .character-count elements should update to show the number of words and characters, respectively.
*/


// Constantly check length of entire character count
// Update the character count variable

// check for space after any letter
// space implies character count

// Variables
const wordApp = {};
wordApp.app = document.querySelector('.app');
wordApp.wordCountEl = document.querySelector('.js-word-count');
wordApp.charLength = document.querySelector('.js-character-count');
wordApp.textArea = document.querySelector('.js-text-area');

//Check amount of characters, update the DOM
wordApp.amountOfChar = e =>  {
  wordApp.charLength.textContent = e.target.value.length;
}

wordApp.textArea.addEventListener('keyup', wordApp.amountOfChar, false);


//Check word count
wordApp.wordCount = e => {
  wordApp.regex = /\s+/gi;
  wordApp.wordCountEl.textContent = wordApp.textArea.value.trim().replace(wordApp.regex, ' ').split(' ').length;



  // var wordCount = value.trim().replace(regex, ' ').split(' ').length;
}

wordApp.textArea.addEventListener('keyup', wordApp.wordCount, false);








