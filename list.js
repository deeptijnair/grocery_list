let items = [];

const addButton = document.getElementById("add-btn");
const clearButton = document.getElementById("clear-btn");

addButton.addEventListener("click", () => {
  let groceryInput = document.getElementById("grocery-input").value;
  console.log("The grocery input is: ", groceryInput);
  document.getElementById(
    "grocery-list"
  ).innerHTML += `<li>${groceryInput}</li>`;
  items.push(groceryInput);
});


clearButton.addEventListener("click", () => {
  document.getElementById("grocery-list").innerHTML = "";
  items = [];
  console.log("The items array: ", items)
});