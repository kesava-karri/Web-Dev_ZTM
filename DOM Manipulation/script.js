var button = document.querySelector("button");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li_all = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
}

function addItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; //Clears the input text after adding to the list
}

function addListAfterClick() {
    if (inputLength() > 0) {
        addItem();
    }
}

function addListAfterKeypress(event) { //event is received automatically
    if(inputLength()>0 && event.key=="Enter") {
        addItem();
    }
}

button.addEventListener("click", addListAfterClick) 

input.addEventListener("keypress", addListAfterKeypress) 

li_all.forEach(function(item) {
    item.addEventListener("click", function(){
        item.classList.toggle("done");
    })
})