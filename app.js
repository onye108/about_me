'use strict';

var response1 = prompt('Does Chika have any dogs?');

if (response1.toLowerCase() === 'yes' || response1.toLowerCase() === 'y') {
  alert('Yes, Chika has 1 dog');
} else if (response1 === 'no' || response1 === 'n')
{
  alert('No, I dont think you know Chika');
}else {
  alert('What are you even talking about');
}
console.log('Chika has a dog name Samson');

var response2 = prompt('Does Chika have any siblings?');

if (response2.toLowerCase() === 'yes' || response2.toLowerCase() === 'y') {
  alert('Yes, 2 sisters and 2 brothers');
} else if (response2 === 'no' || response2 === 'n')
{
  alert('No, I dont think you know Chika');
}else {
  alert('Say What?');
}
console.log('Lord is the 2nd oldest child of 5');

var response3 = prompt('Does Chika like to fish?');

if (response3.toLowerCase() === 'yes' || response3.toLowerCase() === 'y') {
  alert('Correct, esepcially salt water');
} else if (response2 === 'no' || response2 === 'n')
{
  alert('No, I dont think you know Chika');
}else {
  alert('Say What?');
}
console.log('Chika absolutely loves to fish');

var response4 = prompt('Have you met Chika before?');

if (response4.toLowerCase() === 'yes' || response4.toLowerCase() === 'y') {
  alert('Cool guy right?');
} else if (response2 === 'no' || response2 === 'n')
{
  alert('You\'re missing out.');
}else {
  alert('Say What?');
}
console.log('Chika changed my life!');

var response5 = prompt('Does Chika enjoy being outdoors?');

if (response5.toLowerCase() === 'yes' || response5.toLowerCase() === 'y') {
  alert('Mr.National Geographic right?');
} else if (response2 === 'no' || response2 === 'n')
{
  alert('Think again');
}else {
  alert('Say What?');
}
console.log('Chika loves the outdoors!');

var response6 = prompt('How many countries has Chika beeen to?');

if (response6 !== '17' || response6.toLowerCase() !== 'seventeen'){
  prompt('Wrong answer, How many countries has Chika been to?');
} else if (response6 === '17' || response6.toLowerCase() === 'seventeen'){
  alert ('Correct!');
} else {
  alert('Is that even a number?');
}
console.log('Chika has been around the world and back.');

var response7 = prompt('What is Chika\'s favorite number?');

if (response7 !== '5' || response6.toLowerCase() !== 'five'){
  prompt('Wrong answer.Try again');
} else if (response7 === '5' || response7.toLowerCase() === 'five'){
  alert ('Correct!');
} else {
  alert('Is that even a number?');
}
console.log('Chika\'s favorite number is 5 .');
