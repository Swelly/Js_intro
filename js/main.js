alert("hey girl");

var name = prompt("What do they call you?");
var age = parseInt(prompt("what's your age?"));
console.log("You entered {name} and {age}");

if (age > 18) {
  console.log("you are an adult");
}
  else if ( age < 10 ) {
    console.log("you're a baby");
  }
  else {
    console.log("you are alive");
  }

while ( age < 100) {
  console.log("you are alive");
  age++;
}

do {
  age = prompt("how old are you??");
  console.log("you are alive");
} while (age < 100);
