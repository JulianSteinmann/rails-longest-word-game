// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
window.addEventListener('load', function() {

// Load HTML nodes
const game = document.getElementById('game');
const startGameButton = document.getElementById('start-game');
const stopTime = document.getElementById('stop-time');

function startTimer(timeStart) {
  console.log('start');
  const diff = new Date() - timeStart / 1000;
  stopTime.innerHTML = diff;
  console.log('end');

}

// Start game
startGameButton.addEventListener('click', event => {
  console.log( "test" );
  game.classList.remove('hidden');
  const timeStart= new Date();
  // startTimer(timeStart);
  setInterval(function(){ startTimer(timeStart); }, 1000);
});


}) // END MAIN
