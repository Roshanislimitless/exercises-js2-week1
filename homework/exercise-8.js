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

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      },
    addSkill: function(skill){
      this.skills.push(skill);
      return this.skills;
    }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      },
    addStudentLikes: function (likes){
      this.studentlikes += likes;
    }
    
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];

// mentors.forEach((items) => {
//   if ( items.job.city === "Barcelona" && items.skills.includes("React")){
//     console.log(items.firstName + " " + items.lastName) 
//   }
// })

////...................................................................................................
// let y = mentors.filter((items) => {
//   if (items.job.city === "Barcelona") {
//     return items.class = "june 1" && items.skills.push("SQL")
//   }
// })
// console.log(y)

////.....................................................................................................

// let addSkillObject = mentors[0].addSkill("newskill");
// console.log(addSkillObject);



// function addSkill(mentors, newSkill) {
//   let y;
//   for ( i = 0; i < mentors.length; i++){
//     mentors[i].skills.push(newSkill)
//    y =  mentors[i].skills;
//   }
//   return y;
// }

// console.log(addSkill(mentors, "newskill"));
// console.log(mentors);

////................................................................................................

// function filterF(mentors, tofilter) {
//   return mentors.map((any) => {

//     let index = any.skills.indexOf(tofilter);

//     if (any.skills.includes(tofilter)) {
//       any.skills.splice(index, 1);
//       return any.skills
//     } else {
//       return any.skills;
//     }
//   })

// }

// console.log(filterF(mentors, "React"));
////...................................................................................................

// function maxLength(mentors){
//   x = Math.max(...mentors.map( (example) => example.skills.length))
//   return mentors.filter((any) => {
//     if ( x === any.skills.length){
//       return any;
//     }
//   }).map((any) => any.firstName)
  

  
// }

// console.log(maxLength(mentors));

////....................................................................................................

function incrementLikes(likes) {
  mentors.map((any) => any.studentLikes += likes)
}

incrementLikes(3);
console.log(mentors);

////....................................................................................................










