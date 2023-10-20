/** @format */
import "../add_Button/addButton.css";

function createAddButton() {
  const addBtn = document.createElement("button");
  addBtn.classList.add("add_button");
  addBtn.innerText = "+";
  const dfolder = document.getElementById("dfolder");
  dfolder.appendChild(addBtn);
}

export default createAddButton;
