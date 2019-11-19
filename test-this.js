const greeting = function (typeOfGreeting, personName) {
    console.log(`${typeOfGreeting} ${personName}`);
    // console.log(typeOfGreeting + " " + personName);
};

const loopNames = function (arrayOfNames) {
    for (let i = 0; i < arrayOfNames.length; i++) {
        greeting("Hello", arrayOfNames[i]);
        console.log("-------------------------");

    };
};

const loopGreetings = function (arrayOfGreetings) {
    for (let x = 0; x < arrayOfGreetings.length; x++) {
        greeting(arrayOfGreetings[x], "Charlie");
        console.log("-------------------------");
    };
};

const personNames = ["Jonathan", "Keith", "Jacob", "Kimothy", "Peter", "Chelsea"];
const lotsOfGreets = ["What up,", "You the man,", "I define awesomeness as,", "How are you,", "You're amazing,", "Thanks for being you,"];

loopNames(personNames);
loopGreetings(lotsOfGreets);

