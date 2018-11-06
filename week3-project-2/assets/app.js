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

// Inject markup to DOM
monApp.renderApp = () => {
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
  if(!monsterImg) return;

  if(monsterImg === 'sock!') {
    renderLoss();
  }

  //show hidden monster
  monster.innerHTML = `
  <img alt="image of monster ${monsterImg}.replace('.svg', '')" src="assets/images/${monsterImg}">
  `;

  //updateTotal count of monsters
  monApp.updateTotal();
};


const clickHandler = (e) => {
  monster = e.target.closest('[data-monster]');
  if (monster) {
    renderMonster(monster);
  }
}

monApp.renderApp();
monApp.app.addEventListener('click', clickHandler, false);

