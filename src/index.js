import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './js/character.js';
import Battle from './js/battle.js';

function handleFormSubmission(event) {
  event.preventDefault();
  const name = document.querySelector("input#name").value;
  const type = document.querySelector("select#type").value;
  let playerOne = new Character(name, type);
  playerOne.setStats([5, 6, 7, 8, 10]);
  playerOne.setHp(playerOne.statsArray[4]);
  setPlayerDisplay(playerOne);
  console.log(playerOne);
}

function setPlayerDisplay(playerToSet){
  document.querySelector("span#player-name-output").innerText = playerToSet.name;
  document.querySelector("span#player-current-hp").innerText = playerToSet.currentHp;
  document.querySelector("span#player-type").innerText = playerToSet.type;
  document.querySelector("span#player-strength").innerText = playerToSet.statsArray[0];
  document.querySelector("span#player-defense").innerText = playerToSet.statsArray[1];
  document.querySelector("span#player-accuracy").innerText = playerToSet.statsArray[2];
  document.querySelector("span#player-speed").innerText = playerToSet.statsArray[3];
  document.querySelector("span#player-max-hp").innerText = playerToSet.statsArray[4];
  const playerPicture = document.getElementById("player-img");
  playerPicture.setAttribute("src", "./assets/images/earth.png");
}

//mosnter name
//monster currenthp
//monster maxhp
//type
//strength
//defense
//accuracy
//speed


document.querySelector("#character-input").addEventListener("submit", handleFormSubmission);