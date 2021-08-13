//Creating a new promise
const promise = new Promise((resolve, reject) => {
  if(true) {
    resolve('Aipendhi antha aipendhi');
  } else {
    reject("It's rejected");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Yo')
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Hi')
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'Helloo')
})

Promise.all([promise, promise2, promise4, promise3])
  .then(value => console.log(value))

//Chaining promises
promise
  .then(result => result + '!')
  .catch(err => console.log(err))
  .then(result2 => {
    throw Error
    console.log(result2 + '#');
  })
