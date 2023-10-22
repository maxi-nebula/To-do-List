/** @format */

import createModal from "../add_modal/addtaskModal";

function showModal() {
  createModal();

  const modalBox = document.getElementById("tModal");

  modalBox.style.display = "block";
}

export default showModal;
