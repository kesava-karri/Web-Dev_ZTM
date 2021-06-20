// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// console.log(startLine, '\n', turtle.padStart(8), '\n', rabbit.padStart(8)); Another way of doing this


turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);
// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart 
turtle = turtle.trim().padEnd(9, '=');
//Ans: trim removes all the extra white spaces, whereas the second parameter 
// in padStart or padEnd fills those spaces w the given symbol


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(item => item[0] + ' ' + item[1]).join(' ')
//Another way: Object.entries(obj).map(value => value.join(" ")).join(' ')