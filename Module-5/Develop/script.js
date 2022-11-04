// Add moment for current day
var currentdate = document.getElementById("#currentDay");
var date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date);
// --------------------------------------------------------------
// Click time block and enter current event
var timeBlock = $('.time-block');

if (timeBlock >= moment().format("H")) {
    timeBlock.css("background-color","green");
}
if (timeBlock <= moment().format("H")) {
    timeBlock.css("background-color","red");
}
if (timeBlock === moment().format("H")) {
    timeBlock.css("background-color","gray");
};

var textArea = document.querySelector(".time-text");
var ToDo = document.querySelector(textArea);

function renderLastData() {
    ToDo.textContent = textArea;
}
// Save Button function
var save = document.getElementsByClassName('saveBtn');

// save onto local storage
save.onClick(function(event) {
event.preventDefault();
localStorage.setItem("textArea",);
});