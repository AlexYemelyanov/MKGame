let player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['sword'],
    attack: name + 'Fight...'
  },
  player2 = {
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['sword'],
    attack: name + 'Fight...'
  };
const div = document.querySelector('.arenas');

const createPlayer = (name, obj) => {
  div.insertAdjacentHTML('afterbegin', `
  <div div class = "${name}" >
    <div class="progressbar">
        <div class="life">${obj.hp}</div>
        <div class="name">${obj.name}</div>
    </div>
    <div class="character">
        <img src="${obj.img}">
    </div>
</div>
  `)
}
createPlayer('player2', player2);
createPlayer('player1', player1);