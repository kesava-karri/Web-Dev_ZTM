//Declaring function using Function declaration 
function checkDriverAge() {
    var age = Number(prompt("What is your age?"));
    if (age > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (age === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    } else {
        return "Sorry, you are too young to drive this car. Powering off";
    }
}

alert(checkDriverAge());

//Declaring function using Function expression
var checkDriverAge2 = function() {
    var age = Number(prompt("What is your age?"));
    if (age > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (age === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    } else {
        return "Sorry, you are too young to drive this car. Powering off";
    }
}; //Function expression ends in ";" whereas function declaration doesn't.

//function using pre-defined age rather than prompting the user
// function checkDriverAge(age) {
//     if (age > 18) {
//         return "Powering On. Enjoy the ride!";
//     } else if (age === 18) {
//         return "Congratulations on your first year of driving. Enjoy the ride!";
//     } else {
//         return "Sorry, you are too young to drive this car. Powering off";
//     }
// }

// alert(checkDriverAge(22));
