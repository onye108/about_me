'use strict';

var correctAnswer = 0;

function answer1(){
  var response1 = prompt('Does Chika have any dogs?');
  if (response1.toLowerCase() === 'yes' || response1.toLowerCase() === 'y') {
    alert('Yes, Chika has 1 dog');
    correctAnswer += 1;
  } else if (response1 === 'no' || response1 === 'n')
{
    alert('No, I dont think you know Chika');
  }else {
    alert('What are you even talking about');
  }
  console.log('Chika has a dog name Samson');
}

answer1()

function answer2(){
  var response2 = prompt('Does Chika have any siblings?');
  if (response2.toLowerCase() === 'yes' || response2.toLowerCase() === 'y') {
    alert('Yes, 2 sisters and 2 brothers');
    correctAnswer += 1;
  } else if (response2 === 'no' || response2 === 'n'){
    alert('No, I dont think you know Chika');
  }else {
    alert('Say What?');
  }
  console.log('Lord is the 2nd oldest child of 5');
}

answer2()

function answer3(){
  var response3 = prompt('Does Chika like to fish?');
  if (response3.toLowerCase() === 'yes' || response3.toLowerCase() === 'y') {
    alert('Correct, especially salt water');
    correctAnswer += 1;
  }else if (response2.toLowerCase() === 'no' || response2.toLowerCase() === 'n')
{
    alert('No, I dont think you know Chika');
  }else {
    alert('Say What?');
  }
  console.log('Chika absolutely loves to fish');
}

answer3()

function answer4(){
  var response4 = prompt('Have you met Chika before?');
  if (response4.toLowerCase() === 'yes' || response4.toLowerCase() === 'y') {
    alert('Cool guy right?');
    correctAnswer += 1;
  }else if (response2 === 'no' || response2 === 'n')
{alert('You\'re missing out.');
  }else {
    alert('Say What?');
  }
  console.log('Chika changed my life!');
}

answer4()

function answer5() {
  var response5 = prompt('Does Chika enjoy being outdoors?');
  if (response5.toLowerCase() === 'yes' || response5.toLowerCase() === 'y') {
    alert('Mr.National Geographic right?');
    correctAnswer += 1;
  }else if (response2 === 'no' || response2 === 'n')
  {
    alert('Think again');
  }else {
    alert('Say What?');
  }
  console.log('Chika loves the outdoors!');
}

answer5()

function answer6(){
  var answer = 17;
  for ( var i = 0; i < 4 ; i++){
    var response6 = parseInt(prompt('How many countries has Chika traveled to?'));
    if(response6 < answer){ alert('Too low, Try again.');
    }
    if(response6 > answer ){
      alert('Too high, try again.');
    }
    if (response6 === answer ){
      alert('You are correct');
      correctAnswer += 1;
      break;
    }
    if(i === 3){
      alert('Hey, you are out of chances!');
    }
  }
  console.log('Chika has been around the world and back.');
}

answer6()


function answer7(){

  var countries = ['qatar', 'spain', 'azores', 'egypt', 'romania'];
  var countryCorrect = false;
  var countryCount = 0;

  while (countryCount < 4){
    var response7 = prompt('Name one country that I have traveled to').toLowerCase();
    for (var i = 0; i < countries.length; i++){
      if (response7 === countries[i]){
        correctAnswer += 1;
        countryCorrect = true;
        break;
      }
    }//END OF FOR LOOP
    if (countryCorrect) {
      alert('Great Job!');
      break;
    }
    countryCount +=1;
    alert('You are wrong.');
  }//END OF WHILE LOOP


//Last piece is displaying the total number correct and incorrect at the end
  console.log('Thanks for playing my game.');
}

answer7()
