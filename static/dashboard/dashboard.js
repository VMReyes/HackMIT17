

function replaceButtons(){
  if (sex == 'female') {
    r = 0.55;
  } else {
    r = 0.68;
  }
  current_mass += volume * concentration * 28.35;
  console.log(volume);
  console.log(concentration);
  console.log(current_mass);
  console.log(weight);
  console.log(r);
  console.log(hours);
  bac = ((100*current_mass)/(weight*453.592*r))-(0.015*current_hours);
  console.log(bac);
  $('#BAC').text(Number((bac).toFixed(2))+'%');
  if (bac >= chosen_bac) {
    minutes = Math.abs(Math.trunc((chosen_bac-bac)/0.015*60));
    seconds = Math.trunc((Math.abs((chosen_bac-bac)/0.015) * 60 - minutes)*60);
    var x = setInterval(startTimer(),100);
  } else {
    $('#timer').text('You are under your chosen BAC. Continue to drink responsibly.')
  }

  console.log(hours);
  $('#Buttonsb_top').fadeOut().css('display','none');
  $('#Buttonsb_bot').fadeOut().css('display','none');
  $('#Buttons_bot').fadeIn();
  $('#Buttons_top').fadeIn();
}

function startTimer(hours){

  console.log(minutes);
  console.log(seconds);
  $('#timer').text('Do not drink for '+minutes+' minutes and ' + seconds+ ' seconds.');
  if (seconds > 0){
    seconds -= 1;
  } else {
    minutes -= 1;
    seconds = 60;
  }
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
var chosen_bac = 0.06;
