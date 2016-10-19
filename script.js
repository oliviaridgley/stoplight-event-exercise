"use strict";
/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var redButton = document.getElementById('stopButton');
var redLight = document.getElementById('stopLight');



// redButton.addEventListener('click', function(){
//   redlight.style.backgroundColor = 'red';
// });


var orangeButton = document.getElementById('slowButton');
var orangeLight = document.getElementById('slowLight');

// orangeButton.addEventListener('click', function(){
//   orangelight.style.backgroundColor = 'orange';
// });


var greenButton = document.getElementById('goButton');
var greenLight = document.getElementById('goLight');

// greenButton.addEventListener('click', function(){
//   greenlight.style.backgroundColor = 'green';
// });

function clickSwitch (event){
  switch (event.target.id) {
    case 'stopButton':
      redLight.style.background = 'red';
      orangeLight.style.background = 'black';
      greenLight.style.background = 'black';
      break;
    case 'slowButton':
      orangeLight.style.background = 'orange';
      redLight.style.background = 'black';
      greenLight.style.background = 'black';
      break;
    case 'goButton':
      greenLight.style.background = 'green';
      orangeLight.style.background = 'black';
      redLight.style.background = 'black';
      break;
    default:

  }
}

document.querySelector('#controls').addEventListener('click',clickSwitch)
