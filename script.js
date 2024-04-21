const userName = prompt("Enter your name", "name");

function showName() {
  let message = "Hello, ";
  alert(`${message + userName}!`);
}

showName();
