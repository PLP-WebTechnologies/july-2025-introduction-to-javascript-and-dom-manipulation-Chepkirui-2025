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

