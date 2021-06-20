const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 20,
}

// for of
// Iterating (iterables) - arrays, strings
for (item of basket) {
    console.log(item);
}

// for in - properties of object
// Enumerating (enumerables)- objects
for (item in detailedBasket) {
    console.log(item);
}

for (item in basket) { //Thou basket is an array 'for in' loop works cause array is nothing but object w indexes as properties
    console.log(item);
}