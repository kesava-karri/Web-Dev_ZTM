var database = [
    {
        username: "Kesh",
        password: "cheppanu brother"
    },
    {
        username: "jb",
        password: "test",
    },
    {
        username: "M&M",
        password: "123"
    }
];

var newsFeed = [
    {
        username: "Martin",
        feed: "When you're screaming",
    },
    {
        username: "Garrix",
        feed: "but they only here you whisper",
    },
    {
        username: "Troye",
        feed: "I'll be there for you",
    }
];

function isUserValid(user, pass) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === user && database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if(isUserValid(user, pass)) {
        console.log(newsFeed);
    }
    else {
        alert("Wrong username or password");
    }
}

var givenUsername = String(prompt("What's your username?"));
var givenPassword = String(prompt("What's your password?"));

signIn(givenUsername, givenPassword);