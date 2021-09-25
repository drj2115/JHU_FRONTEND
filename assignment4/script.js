// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
(function () { // IIFE
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    // STEP 10:
    // Loop over the names array and say either 'Hello' or "Good Bye"
    // using either the helloSpeaker's or byeSpeaker's 'speak' method.
    for (var idx in names) {

        var name = names[idx];

        // STEP 11:
        // Retrieve the first letter of the current name in the loop.
        // Use the string object's 'charAt' function. Since we are looking for
        // names that start with either upper case or lower case 'J'/'j', call
        // string object's 'toLowerCase' method on the result so we can compare
        // to lower case character 'j' afterwards.
        var firstLetter = name.charAt(0).toLowerCase();

        // STEP 12:
        // Compare the 'firstLetter' retrieved in STEP 11 to lower case
        // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
        // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
        // name in the loop.
        if (firstLetter === 'j') {
            byeSpeaker.speak(name);
        } else {
            helloSpeaker.speak(name);
        }
    }

    // Additional JHU step - use the map function to create an array based on the names array. This array
    // will contain the greetings based on the names with the same rules as implemented previously. The
    // function passed into the map function should not be an inline function, i.e., separate it into its
    // own named function and pass it into the map function as a value. The end result should be that the
    // list prints out twice in the browser console after you complete this part.
    function getGreeting(name) {
        return name.charAt(0).toLowerCase() === 'j' ? byeSpeaker.speakSimple(name) : helloSpeaker.speakSimple(name);
    }
    var namesWithGreetings = names.map(getGreeting);
    console.log(namesWithGreetings);
})();