function bac_evaluation(){
  if (sex = 'female') {
    r = 0.55;
  } else {
    r = 0.68;
  }
  current_mass += volume * concentration * 0.789;
  console.log(current_mass);
  bac = (current_mass / (weight * r)) - (0.015 * hours);
  $('#BAC').text(Number((bac).toFixed(2))+'%');
}

function hr_evaluation(){
  hours = bac / 0.015 - current_mass / 0.015 / weight / r - current_hours;
  if (hours >= 0.0167) {
    //goto timer
  }
}

function resetButtons(){
  $('#oneoz').text("1.5oz").on('click', function(){volume=1.5;replaceButtons()});
  $('#twooz').text("5.0oz").on('click', function(){volume=5.0;replaceButtons()});
  $('#threeoz').text("8.0oz").on('click', function(){volume=8.0;replaceButtons()});
  $('#fouroz').text("12.0oz").on('click', function(){volume=12.0;replaceButtons()});
}


function replaceButtons(){
  $('#oneoz').text('5%').on('click', function(){concentration=.05;bac_evaluation();volume=0;concentration=0;hr_evaluation();resetButtons()});
  $('#twooz').text('10%').on('click', function(){concentration=.10;bac_evaluation();volume=0;concentration=0;hr_evaluation();resetButtons()});
  $('#threeoz').text('30%').on('click', function(){concentration=.30;bac_evaluation();volume=0;concentration=0;hr_evaluation();resetButtons()});
  $('#fouroz').text('40%').on('click', function(){concentration=.40;bac_evaluation();volume=0;concentration=0;hr_evaluation();resetButtons()});
}
function setupHandlers() {
  $('#oneoz').on('click', function(){volume=1.5;replaceButtons()});
  $('#twooz').on('click', function(){volume=5.0;replaceButtons()});
  $('#threeoz').on('click', function(){volume=8.0;replaceButtons()});
  $('#fouroz').on('click', function(){volume=12.0;replaceButtons()});
}

$(document).ready(setupHandlers);

var hours = 0.0;
var bac = 0.00;
var current_mass = 0;
var volume = 0;
var concentration = 0;
var added_volume = 0;
var added_concentration = 0;
var mass = 0;
var weight = 130;
var sex = 'male';
var current_hours = 0;
