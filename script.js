// part 1: mastering JavaScript basics

// Example variables and conditionals
let userAge = 20;
if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// capturing user input and responding
const greetBtn = document.getElementById("greetBtn");
const greetMsg = document.getElementById("greetMsg");

greetBtn.addEventListener("click", () => {
  let name = document.getElementById("username").value;
  if (name.trim() !== "") {
    greetMsg.textContent = `Hello, ${name}! Welcome to JavaScript basics.`;
  } else {
    greetMsg.textContent = "Please enter a valid name.";
  }
});


// part 2: Functions - reusability

// function to calculate total of two numbers
function calculateTotal(a, b) {
  return a + b;
}

// function to format a string nicely
function formatMessage(msg) {
  return `Tip: ${msg}`;
}

// hooking up button to function
const calcBtn = document.getElementById("calcBtn");
const totalResult = document.getElementById("totalResult");

calcBtn.addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (!isNaN(num1) && !isNaN(num2)) {
    let total = calculateTotal(num1, num2);
    totalResult.textContent = `Total = ${total}`;
  } else {
    totalResult.textContent = formatMessage("Please enter two numbers.");
  }
});


// part 3: JavaScript loops

// countdown using a for loop
const countdownBtn = document.getElementById("countdownBtn");
const countdownList = document.getElementById("countdownList");

countdownBtn.addEventListener("click", () => {
  countdownList.innerHTML = ""; // clear previous
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    countdownList.appendChild(li);
  }
});

// iterating through an array using forEach
const listBtn = document.getElementById("listBtn");
const fruitList = document.getElementById("fruitList");

listBtn.addEventListener("click", () => {
  fruitList.innerHTML = ""; // clear previous
  const fruits = ["Mango", "Banana", "Strawberry", "Orange"];

  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
  });
});
