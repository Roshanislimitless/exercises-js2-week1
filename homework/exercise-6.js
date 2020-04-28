/*

Objects very often contain other objects.

This exercise will give you practice in getting the keys of objects inside other objects.

Use the provided console.log statements below and follow the instructions above them.

*/

var storeBranches = {

  glasgow: {
    manager: 'Andrew',
    assistant: 'Laura',
    interns: {
      head_intern: 'Mozafar',
      intern: 'James'
    }
  },

  edinburgh: {
    director: 'Kelly',
    manager: 'Sally',
    assistant: 'Derek',
    interns: {
      head_intern: 'John',
      intern: 'Sarah'
    }
  }
}


// ONLY EDIT BELOW THIS LINE

// # 1
// prints [ 'glasgow', 'edinburgh' ]
let totalKeys = Object.keys(storeBranches);
console.log(totalKeys);

// // # 2
// // prints [ 'manager', 'assistant', 'interns' ]
var oneOftheTwoKey = storeBranches.glasgow;
var keysInsideglassgow = Object.keys(oneOftheTwoKey)
console.log(oneOftheTwoKey)

// // # 
var position = storeBranches.glasgow;
var positionOfInterns = position.interns;
var positionkeysOfInterns = Object.keys(positionOfInterns);
console.log(positionkeysOfInterns);

// // prints [ 'head_intern', 'intern' ]


// // ONLY EDIT ABOVE THIS LINE
