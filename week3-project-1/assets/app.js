/*
How do you figure out how many words are in the text?
How do you deal with things like double spaces after periods, or someone who accidentally hits the space bar a few times (two? three?) between words?

As the user types, the .word-count and .character-count elements should update to show the number of words and characters, respectively.
*/

// Variables
const wordApp = {};
wordApp.wordCountEl = document.querySelector('.js-word-count');
wordApp.charLength = document.querySelector('.js-character-count');
wordApp.textArea = document.querySelector('.js-text-area');

// Autofocus on textarea
wordApp.textArea.focus();

const inputHandler = () => {

  //Check amount of characters, update the DOM
  wordApp.amountOfChar = e =>  {
    wordApp.charLength.textContent = e.target.value.length;
  }

  wordApp.textArea.addEventListener('keyup', wordApp.amountOfChar, false);


  //Check word count
  wordApp.wordCount = () => {
    wordApp.regex = /\s+/gi;
    wordApp.wordCountEl.textContent = wordApp.textArea.value
      .trim()//remove all white space
      .replace(wordApp.regex, ' ')//replace every character with a space
      .split(' ')//split every time there is a space
      .length;//
  }

  wordApp.textArea.addEventListener('keyup', wordApp.wordCount, false);
}

inputHandler();









