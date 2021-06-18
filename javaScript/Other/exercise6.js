//Evaluate these:
//#1
[2] === [2] //Ans:False
{} === {} //Ans: False

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //Ans: 5
const object2 = object1; //Ans: 5
const object3 = object2; //Ans: 5
const object4 = { a: 5}; // Ans: 5
object1.a = 4; //Ans: Changes value of property a for objects 1,2 & 3; a = 4; object4 has a = 5


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
    constructor(name_A, type_A, color_A) {
        this.name = name_A;
        this.type = type_A;
        this.color = color_A;
        console.log(`Hi, I'm an animal`);
    }
}

class Mamal extends Animal {
    constructor(speak, name, type, color) {
        super(name, type, color)
        this.speak = speak;
    }
    sound() {
        console.log(`I make ${this.speak} sound, my name is ${this.name}, type is ${this.type} and color is ${this.color}`);
    }
}

const cow = new Mamal('moo', 'Kamadenu', 'Jersey', 'B&W');
