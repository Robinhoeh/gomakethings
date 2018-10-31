// when someone click on a door, a monster will appear
// listen for click on door
// hide door image and display moster image

const monApp = {};

monApp.app = document.querySelector('.app');
monApp.grid = document.querySelector('.grid');
let totalNumberOfMonsters;

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

//Helper functions
monApp.getMarkup = (monsters) => {
  let markup = "";
  monsters.forEach((monster, index) => {
    markup += `
    <div class="grid" data-monster="${monster}">
    <button class="btn-unstyled"><img alt="Click Me" src="assets/images/door.svg"></button>
    </div>
    `
  })
  return markup;
}

// Total number of doors opened
monApp.updateTotal = () => {
  monApp.totalNumberOfDoorOpened -= 1;
  if(monApp.totalNumberOfDoorOpened === 1) {
    monApp.renderWin();
  }
};

monApp.renderWin = () => {
  monApp.app.innerHTML =
  `<img class="img-full" alt="" src="https://media.giphy.com/media/13zUNhE9WZspMc/giphy.gif">'
  <h2>You Won!</h2>
  <p>You found all the friends, congrats!</p>
  <p><button class="btn" data-monster-play-again>Play Again</button>
  </p>
  `;
};

monApp.renderLoss = () => {
  monApp.app.innerHTML =
  `<img class="img-full" alt="" src="https://media.giphy.com/media/13zUNhE9WZspMc/giphy.gif">'
  <h2>You found a sock!</h2>
  <p><button class="btn" data-monster-play-again>Play Again</button>
  </p`;
};

monApp.renderApp = () => {
  monApp.app.classList.add('row');
  //shuffle monsters array
  monApp.randomMonsters = monApp.shuffle(monsters);
  //Reference list of monsters
  monApp.markup = monApp.getMarkup(monApp.randomMonsters);

  // inject markup to App element
  monApp.app.innerHTML = monApp.markup;

  //  Reset total
  totalNumberOfMonsters = monsters.length;
}

// Show monster after door is clicked
monApp.renderMonster = (monster) => {
  const monsterImg = monster.getAttribute('data-monster');
  if(!monsterImg) return;

  if(monsterImg === 'sock!') {
    monApp.renderLoss();
  }
  //show hidden monster
  const monName = monsterImg.replace('.svg', '');
  monster.innerHTML = `
  <img alt="image of monster ${monName}" src="assets/images/${monsterImg}">
  `;

  //Remove attr
  monName.removeAttribute('data-monster');

  //updateTotal count of monsters
  monApp.updateTotal();
};



// click handler
monApp.clickHandler = (e) => {
  //check is thing that was clicked is inside an element with data-monster
  // data-monster is attched to the parent div container
  monster = e.target.closest('[data-monster]');
  if(monster) {
    // show the monster
    monApp.renderMonster(monster);
  }

  // If clicked el was 'play again' button
  if(e.target.matches('[data-monster-play-again]'));
  //reset game
  monApp.renderApp();
};

monApp.renderApp();
monApp.app.addEventListener('click', monApp.clickHandler, false);

