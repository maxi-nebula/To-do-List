/** @format */
import "../add_modal/addForm.css";
import createElement from "../common/createElement";
import { compareAsc, format } from "date-fns";

function addForm() {
  const labels = ["Title", "Description", "Due on", "Priority"];
  const priorities = ["High", "Medium", "Low"];

  // const taskForm = createElement("form", "tform", "task_form", "Add New Task");

  const taskFooter = createElement("div", "tfooter", "task_footer", "");
  const addbtn = createElement("button", "tbtn", "add_btn", `✔`);
  addbtn.setAttribute("type", "submit");

  const taskForm = document.createElement("form");
  taskForm.id = "tform";
  taskForm.classList.add("task_form");
  const labelList = document.createElement("ul");
  const inputList = document.createElement("ul");
  taskForm.appendChild(labelList);
  taskForm.appendChild(inputList);
  labels.forEach((label) => {
    let newListItem = document.createElement("li");
    let newLabel = document.createElement("label");
    newLabel.innerText = `${label}`;
    newListItem.appendChild(newLabel);
    labelList.appendChild(newListItem);
  });

  const l1 = document.createElement("li");
  const l2 = document.createElement("li");
  const l3 = document.createElement("li");
  const l4 = document.createElement("li");
  inputList.appendChild(l1);
  inputList.appendChild(l2);
  inputList.appendChild(l3);
  inputList.appendChild(l4);
  document.createElement("li");
  const title = document.createElement("input");
  l1.appendChild(title);

  const description = document.createElement("textarea");
  l2.appendChild(description);
  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  l3.appendChild(dueDate);

  let priorityDropDown = document.createElement("select");

  priorities.forEach((priority) => {
    let newPriority = document.createElement("option");
    newPriority.value = `${priority}`;
    newPriority.innerText = `${priority}`;
    priorityDropDown.appendChild(newPriority);
  });

  l4.appendChild(priorityDropDown);

  const modalWindow = document.getElementById("mcontent");
  taskFooter.appendChild(addbtn);

  modalWindow.appendChild(taskForm);
  modalWindow.appendChild(taskFooter);
}

export default addForm;
