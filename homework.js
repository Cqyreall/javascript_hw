// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };
  
// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }
  
// const verdict = declareMurderer();
// console.log(verdict);                   // verdict is ' The murderer is Miss Scarlet '
//                                         // its just calling the function.

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);                   // Error, as you cannot change a constant variable.


// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);                   // murderer is Mrs Peacock, as it uses declareMurderer function, which has a local variable inside

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);                 // makes use of the global variable, hence the murderer is professor plum


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;     
// }

// const suspects = declareAllSuspects();
// console.log(suspects);                                  // prints the suspects one and two to be the global variables, but changes suspect 3 to colonel mustard as it overwrites it in the function
// console.log(`Suspect three is ${suspectThree}.`);       // prints 'suspect three is mrs peacock as it makes use of the global variables.

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };
  
// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
// }
  
// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }
  
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);                       // weapon is the revolver, as the change weapon function is called before the verdict, hence changing the weapon.

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);                       // the murderer is mrs white, as the plot twist is called before the end of the change murderer function.

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);                       // murderer is Mr green, because 'let murderer' is initialised in the plot twist function, which makes it ONLY accessible for that function.

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };
  
// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
// }
  
// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
// }
  
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);                               // weapon is the candle stick, the dining room was passed as a parameter for the dining room. This triggers the unexpected outcome function and changes the weapon to candle stick.



let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);                               // murderer is professor plum, as it initialises its own local variable, which cannot be accessed outside it.