/*Write a JavaScript program that prints numbers from 1 to 100. However, for multiples of 3,
print 'Fizz' instead of the number, and for multiples of 5, print 'Buzz'. For numbers that 
are multiples of both 3 and 5, print 'FizzBuzz'.


Expected Output:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...

*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
