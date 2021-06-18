/*
Lecture Advanced Objects
*/

//Reference type
const object1 = { value: 10};
const object2 = object1;
const object3 = { value: 10};

/* 
    object1.value === object3.value; true
    object1 === object3; false
    object 1 === object2; true
*/

//context
const object4 = {
    a: function() {
        console.log(this); //this is nothing but the object which you currently are in
    }
}

//instantiation
class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi, nenu mee ${this.name}, naa type uu ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name,type) //super is used whenever you extend from other cls, to access the elements inside the Player class
        console.log(this);
    }
    play() {
        console.log(`Namaste bete!!!, nenu mee ${this.name}, idhi naa type uu ${this.type}`);
    }
}

const wizard1 = new Wizard('Sage', 'Healer');
const wizard2 = new Wizard('Raze', 'Boom Buddy');