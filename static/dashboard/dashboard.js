

function replaceButtons(){
  if (sex = 'female') {
    r = 0.55;
  } else {
    r = 0.68;
  }
  current_mass += volume * concentration * 0.789;
  bac = (current_mass / (weight * r)) - (0.015 * hours);
  $('#BAC').text(Number((bac).toFixed(2))+'%');
  hours = bac / 0.015 - current_mass / 0.015 / weight / r - current_hours;
  if (hours >= 0.0167) {
    //goto timer
  }

  $('#Buttonsb_top').fadeOut().css('display','none');
  $('#Buttonsb_bot').fadeOut().css('display','none');
  $('#Buttons_bot').fadeIn();
  $('#Buttons_top').fadeIn();
}


function setupHandlers() {
  $('#oneoz').on('click', function(){volume=1.5;switchButtons()});
  $('#twooz').on('click', function(){volume=5.0;switchButtons()});
  $('#threeoz').on('click', function(){volume=8.0;switchButtons()});
  $('#fouroz').on('click', function(){volume=12.0;switchButtons()});
  $('#oneozb').on('click', function(){concentration=.05;replaceButtons()});
  $('#twoozb').on('click', function(){concentration=.10;replaceButtons()});
  $('#threeozb').on('click', function(){concentration=.30;replaceButtons()});
  $('#fourozb').on('click', function(){concentration=.40;replaceButtons()});
}

function switchButtons(){
  $('#Buttons_top').fadeOut().css('display','none');
  $('#Buttons_bot').fadeOut().css('display','none');
  $('#Buttonsb_bot').fadeIn();
  $('#Buttonsb_top').fadeIn();
}

$(document).ready(setupHandlers);

var hours = 0.0;
var bac = 0.00;
var current_mass = 0.0;
var volume = 0.0;
var concentration = 0.0;
var added_volume = 0.0;
var added_concentration = 0.0;
var mass = 0.0;
var weight = 130.0;
var sex = 'male';
var current_hours = 0.0;
