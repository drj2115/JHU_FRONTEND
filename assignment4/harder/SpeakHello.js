// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
(function () {

    // STEP 3: Create an object, called 'helloSpeaker'
    var helloSpeaker = new Object();

    // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
    var speakWord = "Hello";

    // STEP 4: Rewrite the 'speak' function such that it is attached to the
    // helloSpeaker object instead of being a standalone function.
    var speak = function(name) {
        console.log(speakWord + " " + name);
    }
    helloSpeaker.speak = speak;

    // STEP 5: Expose the 'helloSpeaker' object to the global scope
    window.helloSpeaker = helloSpeaker;
})();