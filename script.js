//generate random numbers
var firstNumber = parseInt(Math.random() * 10);
var secondNumber = parseInt(Math.random() * 10);

//get the total
var total = firstNumber + secondNumber;

//display numbers on the canvas
var primary = document.querySelector("#primary-number");
primary.textContent = firstNumber;

var secondary = document.querySelector("#secondary-number");
secondary.textContent = secondNumber;

//get guess from user
var button = document.querySelector("#btn")

button.addEventListener("click", function () {

    var guess = document.querySelector("#guess").value;
    guess = Number(guess);

    //check answer
    if (guess === total) {
        alert("Correct");
        window.location.reload()
    } else {
        alert("Sorry. Incorrect. The correct answer was " + total + ".")
        window.location.reload()

    }
});