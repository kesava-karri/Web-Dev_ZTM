// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let forEachArray = []
array.forEach(i => { //No need of assigning new var here
  forEachArray.push(i.username.concat('!')); //We do this as forEach doesn't return the values after doing the operation
});
console.log('forEach',forEachArray); 

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map((i) => {
  return i.username + '?'; //Map returns the values so we can directly store them to new array
});
console.log('map',mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(i => {
  if (i.team === 'red') {
    return i.username;
  }
});
console.log('filter', filterArray);

//Find out the total score of all users using reduce
const reduceArray = array.reduce((accumulator, i) => {
  return accumulator + i.score;
}, 0); // Initialize accumulator value to 0;
console.log('reduce', reduceArray);

// (1), what is the value of i?; Ans: i might be the index so at last i has the value of 5 (len-1)
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	console.log(num, i);
// 	alert(num);
// 	return num * 2;
// })

// (Ans of 2) Pure function implies no console.logs() or alerts
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => num * 2);
console.log('pure', newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newItemArray = array.map((i) => {
  i.items = i.items.map(item => item + '!');
  return i;
})
console.log(newItemArray);


