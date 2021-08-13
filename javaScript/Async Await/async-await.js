//With Promises
movePlayer(100, 'Left') //Assuming movePlayer returns a promise
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left'))

//With Async Await
async function playerStart() {
  await movePlayer(100, 'Left');
  await movePlayer(400, 'Left');
  await movePlayer(10, 'Right');
  await movePlayer(330, 'Left');
}

//Before
fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(console.log);

//After
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json();
  console.log(users);
}

//Another example
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url =>
  fetch(url).then(resp => resp.json())
)).then (array => {
  console.log('users', array[0])
  console.log('posts', array[1])
  console.log('albums', array[2])
}).catch(err => console.log('Error', err))

// Using Async Await
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() { //Declaring in Function expression form
  try{
    const [ users, posts, albums ] = await Promise.all(urls.map(url => 
      fetch(url).then(respo => respo.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch (err) {
    console.log('oops', err)
  }
}

