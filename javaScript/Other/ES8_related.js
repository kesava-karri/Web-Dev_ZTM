//'string'.padStart() //takes the value including the string length
//'string.padEnd()

//Trailing commas in a parameter list of a function for easy reference

//Object.entries & Object.values

//We used to have Object.keys earlier

const obj = {
    username0: 'Skye',
    username1: 'Raze',
    username2: 'Jett',
};

Object.keys(obj).forEach((key) => { //Object.keys(obj) returns array w only property names
    console.log(key, obj[key]);
})

//Object.values(obj); returns an array w the values of an object
Object.values(obj).forEach((value) => {
    console.log(value);
})

// Object.entries(obj); returns array of arrays w property along w value
Object.entries(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).map((value) => {
    return value[1] + value[0].replace('username', '')
})