function discover() {
  let firstName = prompt("What is your first name?");
  let lastName = prompt("What is your last name?");
  alert(`Hi ${firstName}, thank you for signing up! 😊`);
}

let button = document.querySelector("button");
button.addEventListener("click", discover);
