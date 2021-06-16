/*forEach just loops thru the array does the operation
  but does not change the array; Doesn't return anything
*/
const array = [1, 2, 10, 16];
const doubleArray = [];
const newArray = array.forEach((num) => {
    doubleArray.push(num * 2);
});

console.log('forEach', doubleArray);

//Usage of most important methods - map, filter, reduce;

//Map does the job and returns it; Doesn't change the original array
const mapArray = array.map(num => {
    return num*2;
});

console.log('map', mapArray);

//Filter is used to get elements of an array satisfying specific condition;
const filterArray = array.filter(num => num > 5); //Notes the values which returns true for given condition;

console.log('filter', filterArray);

/*Reduce has an argument called accumulator (acc) (not necessary to be named the same)
  is used to store the previous value;
  Value of accumulator can be set to any value (here the default value is 0);
  */

const reduceArray = array.reduce((accumulator, num) => accumulator + num, 0);

console.log('reduce', reduceArray);