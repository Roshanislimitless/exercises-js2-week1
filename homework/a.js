/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to ad skills from it

4. Create a method to add a skill to all memebrs in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a method to remove a skill to all memebrs in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function that returns the name of the mentor with more number of skills

7. Create the method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/

var mentors = [{
            firstName: "Antonio",
            lastName: "Miranda",
            skills: ["JS", "React", "Node"],
            class: "Mar1",
            studentLikes: 0,
            job: {
                  company: "Google",
                  position: "Senior developer",
                  city: "Barcelona"
            }

      },
      {
            firstName: "Leo",
            lastName: "Messi",
            skills: ["Play football"],
            class: "Mar3",
            studentLikes: 0,
            job: {
                  company: "FC Barcelona",
                  position: "Player",
                  city: "Barcelona"
            },
            addStudentLikes: function (likes) {
                  this.studentlikes += likes;
            }

      },
      {
            firstName: "John",
            lastName: "VanDamme",
            skills: ["React", "Angular", "Python", "Node"],
            class: "Mar4",
            studentLikes: 0,
            job: {
                  company: "Facebook",
                  position: "Software Manager",
                  city: "Chicago"
            }
      },
      {
            firstName: "Giorgio",
            lastName: "Polvara",
            skills: ["HTML", "JS", "React", "roshan"],
            class: "Mar2",
            studentLikes: 0,
            job: {
                  company: "Amazon",
                  position: "Senior developer",
                  city: "Barcelona"
            }
      },

];

// .............. 1 solved with for loop and filter/map.....................................

// mentors.filter((anyArray) => {
//       if(anyArray.skills.includes("React") && anyArray.job.city === "Barcelona"){
//            return anyArray;
//       }
// }).map((anyArray) => console.log("Hi my name is " + anyArray.firstName + " " + anyArray.lastName + ". I live in" + anyArray.job.city + "and i know react"))

// for (let index = 0; index < mentors.length; index++) {
//       mentor = mentors[index];
//       if (mentor.skills.includes("React") & mentor.job.city === "Barcelona"){
//             var sentence = ` hi my name is ${mentor.firstName} ${mentor.lastName} and i live in ${mentor.job.city} and i know react.`
//             console.log(sentence);
//       }

// }

//...............2 solved with loop and filter/map...........................................
// for (let index = 0; index < mentors.length; index++) {
//       mentor = mentors[index];
//       if ( mentor.job.city === "Barcelona" ){
//             mentor.class = "june 1";
//              mentor.skills.push("SQl");

//       }


// }
// console.log(mentors);

// mentors.filter((anyArray) => {
//       if( anyArray.job.city === "Barcelona"){
//             anyArray.class = "june 1";
//             anyArray.skills.push("SQL")
//       }
// })

// console.log(mentors);

//..................3 solved with loop (revise it please)......................................

/* for (let index = 0; index < mentors.length; index++) {
      mentors[index].addSkill = function (skill){
            this.skills.push(skill);
      }
      
} */



// for (let index = 0; index < mentors.length; index++) {
//       mentors[index].addSkill("ABC");

// }

//..................4 solved with loop (revise it please).................................

/* function addSkill(mentors, newSkill) {
   for(i = 0; i < mentors.length; i++){
         mentors[i].skills.push(newSkill);
   }
}

addSkill(mentors, "swimming")
console.log(mentors); */
//..................................................................
/* function addSkill(mentors, skills){
return mentors.map((anyArray) => anyArray.skills.push(skills));
}
addSkill(mentors, "Python");
console.log(mentors); */

//...........................5 solved with built inmenthods and object function loops..............................
/* function removeSkill(mentors, newSkill) {
      mentors.filter((anyArray) => {
           let index = anyArray.skills.indexOf(newSkill);
            return anyArray.skills.splice(index,1);
      })
      
}
removeSkill(mentors, "React");
console.log(mentors); */
//........................................................

/* for (i = 0; i < mentors.length; i++) {
      mentors[i].removeSkill = function (newSkill) {
            let index = this.skills.indexOf(newSkill);
            if (index > -1) {
                  this.skills.splice(index, 1);
            }
      }
}
for (i=0; i < mentors.length; i++){
      mentors[i].removeSkill("React");
}
console.log(mentors); */

//...........................6 solved with built in methods and loops............................
// function filterMax(mentor){

// let x = mentor.map((anyArray) => anyArray.skills.length)
// let y = Math.max(...x);
// let semifinal = mentor.filter((anyarray) => {
//       if ( anyarray.skills.length === y){
//             return anyarray;
//       }
// })
// let final = semifinal.map((anyarray) => anyarray.firstName + anyarray.lastName);
// return final;

// }
// let y = filterMax(mentors);
// console.log(y)

//...........................................................
//alternative self made//but not recomended 
// function returnMax(array){
// let max = 0;
// let newArray = [];
// let final =[];

// for (i = 0; i < array.length; i++){
//    newArray.push(array[i].skills.length);
//    if ( array[i].skills.length === max){
//         final = array[i];
//    }
// }

// for (i = 0; i < newArray.length; i++) {
//       if (newArray[i] < newArray[i + 1]){
//             max = newArray[i + 1];
//       }
// }
// for (i = 0; i < array.length; i++) {
//       if (array[i].skills.length === max) {
//             final.push(array[i].firstName);
//       }
// }
// return final;


// }

// console.log(returnMax(mentors));

// function returnMax(array) {
//       let maximum = 0;
//       let requiredIndex = "";

//       for (i = 0; i < array.length; i++){
//             if ( array[i].skills.length > 0){
//                   maximum = array[i].skills.length;
//                   requiredIndex = array[i]

//             }
//       }
//       return requiredIndex.firstName;
// }

// returnMax(mentors);
// console.log(returnMax(mentors));

//......................7 and tired...............................................

for (i = 0; i < mentors.length; i++){
    mentors[i].addstdlikes = function (likes){
          this.studentLikes += likes;

    }
}


// mentors[1].addstdlikes(7);
// console.log(mentors[1]);


// ....................8 and ................................................................

function addStudentLikesToAll(mentors,likes){
      for(i = 0; i < mentors.length; i++){
            mentors[i].addstdlikes(likes);

      }   
}

addStudentLikesToAll(mentors, 3);
console.log(mentors);









