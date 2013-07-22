alert("Welcome to Hogwarts");
var msg = "Add student to Hogwarts? (y/n)";
var answer = prompt(msg);
var hogwarts = [];

function studentInfo(){
  for (var i = 0; i < this.student.length; i++) {
    for (info in this.student[i]){
      console.log(this.student + "who is " + this.student.age + ", in house " + this.student.house);
    }
  }
}

while(answer != "n"){
    var name = prompt("Name");
    var age = parseInt(prompt("Age"));
    var house = prompt("House");
    var student = {
      name: name,
      age: age,
      house: house,
      info: function(){
        console.log(this.name + "who is " + this.age + ", in house " + this.house)
      }
    };
    console.log(studentInfo);
    hogwarts.push(student);
    choice = prompt("Add another student? (y/n)");
    break;
}

for (var i = 0; i < hogwarts.length; i++ ) {
  for (info in hogwarts[i]){
    console.log(hogwarts[i][info]);
  }
}
