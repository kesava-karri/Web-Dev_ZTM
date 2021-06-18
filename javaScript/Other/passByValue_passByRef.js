//create an clone array
const array = [1, 2, 3];
const cloneArray = [].concat(array);

console.log('array', array);
console.log('Clone Array', cloneArray);

//clone an object
const obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}; //new method of cloning object

obj.c = 5;
console.log('obj', obj);
console.log('clone', clone);
console.log('clone2', clone2);