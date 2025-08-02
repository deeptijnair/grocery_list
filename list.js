function addGroceryItem() {
  let groceryInput = document.getElementById("grocery-input").value;
  console.log("The grocery input is: ", groceryInput);
  document.getElementById("grocery-list").innerHTML += `<li>${groceryInput}</li>`;
}
