/* 
1) Define an array containing the 3 persons defined below.
2) Return an array of the person names (hint: use map).
3) Filter the persons to return an array with the person younger than 28 years old (hint: use filter).
*/

var person1 = {
    name: "Alice",
    age: 25
};

var person2 = {
    name: "Bob",
    age: 30
};

var person3 = {
    name: "John",
    age: 20
};

/* 
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/
let persons = [person1, person2, person3];
// let personNames = [];
// function personName(array){
   
//     for (let index = 0; index < array.length; index++) {
//           personNames.push(array[index].name);
          
        
        
//     }
//     return personNames;
// }


// personName(persons)

// let personsYoungerThan28YearsOld = [];

// function ageFilter(array){
//       for (let index = 0; index < array.length; index++) {
//           if ( array[index].age < 28){

//              personsYoungerThan28YearsOld.push(array[index])
              
//           }
          
//       }
//       return personsYoungerThan28YearsOld;
// }
// console.log(ageFilter(persons));

function personName(array) {
    return array.name;
}

var personNames = persons.map(personName);




function ageFilter(array) {
    if (array.age < 28){
        return array;

    }
}

var personsYoungerThan28YearsOld = persons.filter(ageFilter);









/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/


console.log("Question 1: array defined with 3 persons -> ", 
    (persons[0] === person1 && persons[1] === person2 && persons[2] === person3) ? 'Passed :)' : 'Not yet :(');

console.log("Question 2: array containing the person names -> ", 
    (personNames[0] === "Alice" && personNames[1] === "Bob" && personNames[2] === "John") ? 'Passed :)' : 'Not yet :(');

 console.log("Question 3: array containing the persons younger than 28 years old -> ", 
     (personsYoungerThan28YearsOld[0] === person1 && personsYoungerThan28YearsOld[1] === person3) ? 'Passed :)' : 'Not yet :(');
