//#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

var experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward"); Ans: undefined [As it breaks before assigning value to the variable]

//#3 return value when moveCommand("back"); Ans: "you arrived home"

//#4 return value when moveCommand("right"); Ans: "you found a river"

//#5 return value when moveCommand("left"); Ans: "undefined""

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function calculator(expr) { // example of expr = "2 + 3";
    var result;
    var operator = ["+", "-", "/", "%", "*"];
    var operator = expr.split(" ")[1];
    var first_operand = Number(expr.split(" ")[0]);
    var second_operand = Number(expr.split(" ")[2]);
    switch (operator) {
        case "+":
            result = first_operand + second_operand;
        case "-":
            result = first_operand - second_operand;
        case "/":
            result = first_operand / second_operand;
        case "%":
            result = first_operand % second_operand;
        case "*":
            result = first_operand * second_operand;
    }
    return result;
}





