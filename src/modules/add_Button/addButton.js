/** @format */
import "../add_Button/addButton.css";

import showModal from "../add_Button/showModal";

function createAddButton(btnText) {
  const dfooter = document.getElementById("dFooter");

  const addBtn = document.createElement("button");
  addBtn.classList.add("add_button");
  addBtn.innerText = `${btnText}`;

  dfooter.appendChild(addBtn);
  addBtn.addEventListener("click", () => {
    showModal();
  });
}

export default createAddButton;
