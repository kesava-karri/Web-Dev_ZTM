var button = document.querySelector("button");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function addItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; //Clears the input text after adding to the list
    
    //Delete button for newly created list items
    var button = document.createElement("button"); 
    button.appendChild(document.createTextNode("Delete"));
    li.appendChild(button);
    button.onclick = removeParent;
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

function crossoff(event) {
    if(event.target.tagName === "LI") { //The target returns in uppercase
        event.target.classList.toggle("done");
    }
}

function addDeleteButton() { //Delete button for existing items
    var li_all = document.querySelectorAll("li");
    li_all.forEach(function(item) {
        var button = document.createElement("button");
        button.appendChild(document.createTextNode("Delete"));
        item.appendChild(button);
        button.onclick = removeParent;
    })
}

function removeParent(event) {
    event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", crossoff);

addDeleteButton();