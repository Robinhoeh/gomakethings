// when someone click on a door, a monster will appear
// listen for click on door
// hide door image and display moster image

const monApp = {};
let totalNumberOfMonsters;
monApp.app = document.querySelector('.app');
monApp.grid = document.querySelector('.grid');

// The monsters and socks
const monsters = [
  'sock!',
  'monster1.svg',
  'monster2.svg',
  'monster3.svg',
  'monster4.svg',
  'monster5.svg',
  'monster6.svg',
  'monster7.svg',
  'monster8.svg',
  'monster9.svg',
  'monster10.svg',
  'monster11.svg'
];



// Methods
monApp.shuffle = function (array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

// ------- Helper functions --------

//pass in monsters array
const monsterMarkup = (monsters) => {
  // let markup will contain markup of monster
  let eachMonsterMarkup = "";
  //loop through monsters array
  monsters.forEach((monster) => {
    //create and inject markup for each monster
    //button el makes it tabable and clickable
    eachMonsterMarkup += `
    <div class="grid" data-monster="${monster}">
      <button class="btn-unstyled">
       <img alt="Click Me" src="assets/images/door.svg">
      </button>
    </div>
    `
    //using data-monster allows you to store the image of the
    // monster on the element
  });
  //markup now holds every monster in it's own .grid div
  return eachMonsterMarkup;
}


// Total number of doors opened
const updateTotal = () => {
  // subtract 1 each time
  totalNumberOfMonsters = totalNumberOfMonsters - 1;
  console.log(totalNumberOfMonsters);
  if(totalNumberOfMonsters < 2) {
    renderWin();
  }
}

const renderWin = () => {
  monApp.app.innerHTML =
  `<img class="img-full" alt="" src="https://media.giphy.com/media/13zUNhE9WZspMc/giphy.gif">'
  <h2>You Won!</h2>
  <p>You found all the friends, congrats!</p>
  <p><button class="btn" data-monster-play-again>Play Again</button>
  </p>
  `;
};


// render loss and display play again button inside the markup
const renderLoss = () => {
  //View only shows error message
  //innerHTML will wipe out everyelse in DOM and replace wiith template literal below
  monApp.app.innerHTML =
  `<img class="img-full" alt="" src="https://media.giphy.com/media/13zUNhE9WZspMc/giphy.gif">'
  <h2>You found a sock!</h2>
  <p><button class="btn" data-monster-play-again>Play Again</button>
  </p`;
};

// Inject markup to DOM
const renderApp = () => {
  // Inject markup
  monApp.app.classList.add('row');
  //shuffle monsters array
  const randomMonsters = monApp.shuffle(monsters);
  //Reference list of monsters
  let markup = monsterMarkup(randomMonsters);
  // inject monster markup to App element
  monApp.app.innerHTML = markup;
  //  Reset total
  totalNumberOfMonsters = monsters.length;
}

// Show monster after door is clicked
const renderMonster = (monster) => {
  //checks if monster has attr of 'data-monster' in its element
  const monsterImg = monster.getAttribute('data-monster');
  console.log(monsterImg);
  if(!monsterImg) return;

  if(monsterImg === 'sock!') {
    renderLoss();
  }

  //show hidden monster
  monster.innerHTML = `
  <img alt=image of ${monsterImg}.replace('.svg', '') src="assets/images/${monsterImg}">
  `;

  // monster.innerHTML = '<img alt="' + monsterImg.replace('.svg', '') + '" src="' + monsterImg + '">';

  monster.removeAttribute('data-monster');

  // Update the total number of monsters remaining
  updateTotal();
};


const clickHandler = (e) => {
  const monster = e.target.closest('[data-monster]');
  if (monster) {
    renderMonster(monster);
  }

  // if button clicked on has play again button data attr
  if (e.target.matches('[data-monster-play-again]')) {
    // reset the game
    renderApp();
  }

}

renderApp();
monApp.app.addEventListener('click', clickHandler, false);

