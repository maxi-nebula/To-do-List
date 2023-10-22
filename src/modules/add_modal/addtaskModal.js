/** @format */

import "../add_modal/addtaskModal.css";
import createElement from "../common/createElement";
import addForm from "../add_modal/addForm";

function createModal() {
  const taskModal = document.createElement("div");
  taskModal.id = "tModal";
  taskModal.classList.add("task_modal");
  const taskContent = createElement("div", "mcontent", "modal_content", "");

  taskModal.appendChild(taskContent);

  const closeBtn = createElement("button", "cbtn", "close", "X");

  taskContent.appendChild(closeBtn);

  const container = document.getElementById("container");
  container.appendChild(taskModal);
  addForm();

  closeBtn.addEventListener("click", () => {
    closeModal();
  });

  function closeModal() {
    taskModal.style.display = "none";
  }
}

export default createModal;
