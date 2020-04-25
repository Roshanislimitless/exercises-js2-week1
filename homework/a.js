 let array = {
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
         this.studentLikes += likes;
     }
    };

    console.log(array.addStudentLikes(3));
    console.log(array);
    