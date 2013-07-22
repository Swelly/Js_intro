alert("WAIT... calculate");


var msg = "(a)dd (s)ubtract (m)ultiply or (d)ivide... maybe (q)uit";
var choice = prompt(msg);
var numbers = [];

while (choice != 'q') {
  var x = parseInt(prompt("first number"));
  var y = parseInt(prompt("second number"));
  numbers.push(x);
  numbers.push(y);
  switch (choice) {
  case 'a':
  console.log( x + y );
  break;
  case 's':
  console.log( x - y );
  break;
  case 'm':
  console.log( x * y );
  break;
  case 'd':
  console.log( x / y );
  break;
  case 'h':
  for (var i = 0; i < numbers.length; i++)
    console.log(numbers[i]);
  break;
  default:
  console.log("Not a valid option");
}
choice = prompt(msg);
}

