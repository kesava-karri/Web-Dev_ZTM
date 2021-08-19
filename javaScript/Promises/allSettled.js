//Promise.allSettled()

//As Promise.all() only works when all the promises get resolved
//which otherwise throws an error. So Promise.allSettled() has been introduced.

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000));
Promise.allSettled([promiseOne, promiseTwo]);