"use strict";
//          100 days of coding challenge ( DAY 28 )
Object.defineProperty(exports, "__esModule", { value: true });
// Question 01
// ---This function counts how many characters are in a string
function stringLength(str) {
    return str.length; // Returns the number of characters in the string
}
// ---Example: Measuring the length of a name
console.log(stringLength("Alice")); // Outputs: 5
// ---We're simply asking how long the string "Alice" is, and it tells us there are 5 characters.
// Question 02
// ---This function changes a string to uppercase and then to lowercase
function convertCase(str) {
    let upperStr = str.toUpperCase(); // Converts to uppercase
    let lowerStr = str.toLowerCase(); // Converts to lowercase
    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}
// ---Example: Changing the case of "Hello World"
convertCase("Iam Lenovo"); // Outputs: "Uppercase: HELLO WORLD Lowercase: hello world"
// ---We're showing the same text in all uppercase and then all lowercase.
//   Question 03 
// ---This function swaps "JavaScript" with "TypeScript" in a sentence
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
    // ---Uses a regular expression with the 'g' flag for a global replacement
}
// ---Example: Changing a programming language name in a sentence
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is just love yrr!"));
// ---Outputs: "I love TypeScript and TypeScript is awesome!"
// ---Every "JavaScript" in the sentence is changed to "TypeScript".
