"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError("An error occurred!", 500);
console.log(result);
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Clicked!');
});
//# sourceMappingURL=app.js.map