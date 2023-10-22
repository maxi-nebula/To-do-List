/** @format */

import "../add_modal/addtaskModal.css";

function createModal() {
  const taskModal = document.createElement("div");
  taskModal.id = "tModal";
  taskModal.classList.add("task_modal");
  const container = document.getElementById("container");
  container.appendChild(taskModal);
}

export default createModal;
