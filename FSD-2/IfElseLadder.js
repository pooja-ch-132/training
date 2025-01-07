//take 3 values and print which value is greater among the three values.
//let a = 20;
//let b = 140;
//let c = 100;
//do this with both if-else ladder and switch condition.

// Taking user input
let a = parseInt(prompt("Enter the first value (a):"));
let b = parseInt(prompt("Enter the second value (b):"));
let c = parseInt(prompt("Enter the third value (c):"));

// If-Else Ladder
if (a > b && a > c) {
  console.log("a is the greatest: " + a);
} else if (b > a && b > c) {
  console.log("b is the greatest: " + b);
} else if (c > a && c > b) {
  console.log("c is the greatest: " + c);
} else {
  console.log("There is a tie.");
}
