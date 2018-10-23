// The monsters and socks
const monsters = [
  'sock',
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

// when someone click on a door, a monster will appear
// listen for click on door
// hide door image and display moster image

const monApp = {};

monApp.app = document.querySelector('.app');
monApp.grid = document.querySelector('.grid');

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

monApp.startGame = () => {

  monApp.app.classList.add('row');
  //shuffle monsters array
  monApp.randomMonsters = monApp.shuffle(monsters);
  //Reference list of monsters
  monApp.markup = getMarkup(randomMonsters);


  //Helper functions
  monApp.getMarkup = (monsters) => {
    let markup = "";
    monsters.forEach((monster) => {
      markup += `
      <div class="grid" data-monster="${monster}">
        <button class="btn-unstyled"><img alt="Click Me" src="door.svg"></button>
      </div>
      `
    })
    return monApp.markup;
  }

  // inject markup to App element
  monApp.app.innerHTML = monApp.markup;
}

monApp.startGame();