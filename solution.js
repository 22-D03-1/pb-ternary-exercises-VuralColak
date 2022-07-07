// These exercises are designed to make you more comfortable with the ternary operator.

// write your code in solution.js


//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 1 : ");
// Declare a boolean variable named isDog. Write code that prints a sentence to the console depending on the value of dog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

const isDog = true;

isDog == true
    ? console.log("pat, pat")
    : console.log("find me a dog to pat!");


//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 2 : ");
// Declare 2 variables named speedLimit and yourSpeed. Assign speedLimit to 50km/h. If yourSpeed is above that, this sentence 'you're going too fast!' should be printed. If speed is lower than speedLimit, this sentence 'You're driving below the speed limit, Oma' should be printed.


const speedLimit = 50;
yourSpeed = 49;
yourSpeed > speedLimit
    ? console.log("you're going too fast!")
    : console.log("You're driving below the speed limit, Oma");


//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 3 : ");
// Declare a variable named age. Write code that prints a sentence to the console depending on the age value. If age is below 16, "serve butter beer" should be printed. Otherwise "serve beer".

const age = 14;

age < 16
    ? console.log("serve butter beer")
    : console.log("serve beer");


//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 4 : ");
// Declare a variable named isStudent. Write code that prints a sentence to the console depending on the variable's valuue. If true, "Ticket costs €5,00" should be printed. If false, "Ticket costs €12,00".


isStudent = false;

isStudent == true
    ? console.log("Ticket costs €5,00")
    : console.log("Ticket costs €12,00");


//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 5 : ");
// Declare a variable named okMarie. write code that checks if the value of the variable is 'cake' - if so, "Let them eat cake" should be printed. If not, "Oh, bother".

okMarie = "cola";

okMarie == "cake"
    ? console.log("Let them eat cake")
    : console.log("Oh, bother");



//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 6 : ");
// Check if the following numbers are even numbers. Use a ternary and if the number is even e.g. 30. 30 is even should be printed, else e.g. 31: 31 is odd


const num1 = 30;
const num2 = 939;
const num3 = 40.9;

num1 % 2 == 0
    ? console.log(num1 + " is even")
    : console.log(num1 + " is odd");


num2 % 2 == 0
    ? console.log(num2 + " is even")
    : console.log(num2 + " is odd");

num3 % 2 == 0
    ? console.log(num3 + " is even")
    : console.log(num3 + " is odd");
